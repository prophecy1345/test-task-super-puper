<template>
  <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <form @submit.prevent="submitForm">
      <PersonalInfoForm :modelValue="formData" :errors="errors" />

      <PaymentInfoForm :modelValue="formData" :errors="errors" />

      <FormActions />

      <FormSuccess :show="formSubmitted && !hasErrors" />
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import i18n from '../../i18n'
  import PersonalInfoForm from './form/PersonalInfoForm.vue'
  import PaymentInfoForm from './form/PaymentInfoForm.vue'
  import FormActions from './form/FormActions.vue'
  import FormSuccess from './form/FormSuccess.vue'

  interface FormFields {
    fullName: string
    email: string
    password: string
    cardNumber: string
    expiry: string
    cvc: string
  }

  const formData = ref<FormFields>({
    fullName: '',
    email: '',
    password: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  })

  const errors = ref<FormFields>({
    fullName: '',
    email: '',
    password: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  })

  const formSubmitted = ref(false)

  const hasErrors = computed(() => {
    return Object.values(errors.value).some((error) => error !== '')
  })

  function validateCardNumber(number: string): boolean {
    return /^[\d\s]{16,19}$/.test(number.trim())
  }

  function validateExpiry(expiry: string): boolean {
    return /^\d{2}\/\d{2}$/.test(expiry.trim())
  }

  function validateCVC(cvc: string): boolean {
    return /^\d{3,4}$/.test(cvc.trim())
  }

  function validateForm(): boolean {
    let isValid = true

    Object.keys(errors.value).forEach((key) => {
      errors.value[key as keyof typeof errors.value] = ''
    })

    if (!formData.value.fullName.trim()) {
      errors.value.fullName = i18n.global.t('order.fullName.required')
      isValid = false
    }

    if (!formData.value.email.trim()) {
      errors.value.email = i18n.global.t('order.email.required')
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email.trim())) {
      errors.value.email = i18n.global.t('order.email.invalid')
      isValid = false
    }

    if (!formData.value.password) {
      errors.value.password = i18n.global.t('order.password.required')
      isValid = false
    } else if (formData.value.password.length < 8) {
      errors.value.password = i18n.global.t('order.password.minLength')
      isValid = false
    }

    if (!formData.value.cardNumber.trim()) {
      errors.value.cardNumber = i18n.global.t('order.cardNumber.required')
      isValid = false
    } else if (!validateCardNumber(formData.value.cardNumber)) {
      errors.value.cardNumber = i18n.global.t('order.cardNumber.invalid')
      isValid = false
    }

    if (!formData.value.expiry.trim()) {
      errors.value.expiry = i18n.global.t('order.expiry.required')
      isValid = false
    } else if (!validateExpiry(formData.value.expiry)) {
      errors.value.expiry = i18n.global.t('order.expiry.invalid')
      isValid = false
    }

    if (!formData.value.cvc.trim()) {
      errors.value.cvc = i18n.global.t('order.cvc.required')
      isValid = false
    } else if (!validateCVC(formData.value.cvc)) {
      errors.value.cvc = i18n.global.t('order.cvc.invalid')
      isValid = false
    }

    return isValid
  }

  function submitForm() {
    if (validateForm()) {
      formSubmitted.value = true

      Object.keys(formData.value).forEach((key) => {
        formData.value[key as keyof typeof formData.value] = ''
      })

      setTimeout(() => {
        formSubmitted.value = false
      }, 3000)
    }
  }
</script>

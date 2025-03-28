<template>
  <div>
    <h3 class="text-xl font-semibold mb-4">{{ $t('order.payment.title') }}</h3>
    <FormInput
      id="cardNumber"
      v-model="modelValue.cardNumber"
      :label="$t('order.cardNumber.label')"
      :placeholder="$t('order.cardNumber.placeholder')"
      :error="errors.cardNumber"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <FormInput
        id="expiry"
        v-model="modelValue.expiry"
        :label="$t('order.expiry.label')"
        :placeholder="$t('order.expiry.placeholder')"
        :error="errors.expiry"
      />
      <FormInput
        id="cvc"
        v-model="modelValue.cvc"
        :label="$t('order.cvc.label')"
        :placeholder="$t('order.cvc.placeholder')"
        :error="errors.cvc"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from '../../common/FormInput.vue'

defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  errors: {
    type: Object,
    required: true
  }
})
</script>

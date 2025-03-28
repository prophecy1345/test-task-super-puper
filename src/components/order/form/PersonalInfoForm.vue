<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">{{ $t('order.formTitle') }}</h2>
    <FormInput
      id="fullName"
      v-model="modelValue.fullName"
      :label="$t('order.fullName.label')"
      :placeholder="$t('order.fullName.placeholder')"
      :error="errors.fullName"
    />
    <FormInput
      id="email"
      v-model="modelValue.email"
      :label="$t('order.email.label')"
      :placeholder="$t('order.email.placeholder')"
      :error="errors.email"
      type="email"
    />
    <FormInput
      id="password"
      v-model="modelValue.password"
      :label="$t('order.password.label')"
      :placeholder="$t('order.password.placeholder')"
      :error="errors.password"
      :hint="$t('order.password.hint')"
      type="password"
    />
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

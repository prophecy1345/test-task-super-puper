<template>
  <div>
    <div class="mb-6">
      <p class="text-gray-600">
        {{ $t('order.termsAgreement') }}
        <RouterLink :to="`/${currentLocale}/tos`" class="text-blue-600 hover:underline">
          {{ $t('order.termsLink') }} </RouterLink
        >.
      </p>
    </div>

    <div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
      >
        {{ $t('order.submit') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import i18n from '../../../i18n'

const currentLocale = computed(() => i18n.global.locale.value)
</script>

<template>
  <div class="mb-4">
    <h3 class="text-xl font-bold">{{ $t(`pricing.${planType}.title`) }}</h3>
    <div class="text-2xl font-bold text-blue-600 mt-2">{{ $t(`pricing.${planType}.price`) }}</div>
    <p class="text-gray-600 mt-2">{{ $t(`pricing.${planType}.description`) }}</p>
  </div>
</template>

<script setup lang="ts">
  import type { PlanType } from '../../stores/pricingStore'

  defineProps<{
    planType: PlanType
  }>()
</script>

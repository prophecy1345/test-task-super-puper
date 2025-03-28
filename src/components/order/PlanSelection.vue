<template>
  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-4">{{ $t('order.selectPlan') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="plan in pricingStore.plans"
        :key="plan"
        class="border rounded-lg p-4 cursor-pointer transition-all duration-200"
        :class="[
          pricingStore.selectedPlan === plan
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-blue-300'
        ]"
        @click="pricingStore.setSelectedPlan(plan)"
      >
        <div v-if="pricingStore.selectedPlan === plan" class="mb-2 text-blue-500 font-semibold">
          ✓ {{ $t('order.selectedPlan') }}
        </div>
        <h3 class="text-lg font-bold">{{ $t(`pricing.${plan}.title`) }}</h3>
        <p class="text-gray-600 mt-1">{{ $t(`pricing.${plan}.features.0`) }}</p>

        <!-- Цена -->
        <p class="text-blue-600 font-bold mt-2">{{ $t(`pricing.${plan}.price`) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { usePricingStore } from '../../stores/pricingStore'

  const pricingStore = usePricingStore()
</script>

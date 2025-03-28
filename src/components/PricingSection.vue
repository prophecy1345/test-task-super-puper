<template>
  <section id="pricing" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">{{ $t('pricing.title') }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          v-for="plan in pricingStore.plans"
          :key="plan"
          :planType="plan"
          class="h-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import PricingCard from './PricingCard.vue'
  import { usePricingStore } from '../stores/pricingStore'

  const pricingStore = usePricingStore()
</script>

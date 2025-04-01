<template>
  <div 
    class="border rounded-lg p-6 transition-all duration-200 h-full flex flex-col cursor-pointer"
    :class="[
      isSelected 
        ? 'border-blue-500 shadow-lg bg-blue-50' 
        : 'border-gray-200 hover:border-blue-300 hover:shadow'
    ]"
    @click="selectPlan"
  >
    <PricingCardHeader :planType="planType" />
    <PricingFeaturesList :planType="planType" />
    <PricingCardAction 
      :isSelected="isSelected" 
      @select="selectPlanAndNavigate" 
    />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import type { PlanType } from '../stores/pricingStore'
  import { usePricingStore } from '../stores/pricingStore'
  import i18n from '../i18n'
  import PricingCardHeader from './pricing/PricingCardHeader.vue'
  import PricingFeaturesList from './pricing/PricingFeaturesList.vue'
  import PricingCardAction from './pricing/PricingCardAction.vue'

  const store = usePricingStore()
  const router = useRouter()
  const currentLocale = computed(() => i18n.global.locale.value)

  const props = defineProps<{
    planType: PlanType
  }>()

  const isSelected = computed(() => store.selectedPlan === props.planType)

  function selectPlan() {
    store.setSelectedPlan(props.planType)
  }

  function selectPlanAndNavigate() {
    selectPlan()
    router.push({
      name: 'Order',
      params: {
        locale: currentLocale.value
      }
    })
  }
</script>

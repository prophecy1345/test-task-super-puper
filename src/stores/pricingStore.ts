import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type PlanType = 'free' | 'basic' | 'advanced'

export const usePricingStore = defineStore('pricing', () => {
  const selectedPlan = ref<PlanType>('free')

  function setSelectedPlan(plan: PlanType) {
    selectedPlan.value = plan
  }

  const plans = computed<PlanType[]>(() => ['free', 'basic', 'advanced'])

  return {
    selectedPlan,
    setSelectedPlan,
    plans
  }
})

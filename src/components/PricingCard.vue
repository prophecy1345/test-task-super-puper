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
    <div class="mb-4">
      <h3 class="text-xl font-bold">{{ $t(`pricing.${planType}.title`) }}</h3>
      <div class="text-2xl font-bold text-blue-600 mt-2">{{ $t(`pricing.${planType}.price`) }}</div>
      <p class="text-gray-600 mt-2">{{ $t(`pricing.${planType}.description`) }}</p>
    </div>
    
    <div class="mt-4 flex-grow">
      <h4 class="font-semibold mb-2">Features</h4>
      <ul class="space-y-2">
        <li 
          v-for="(feature, index) in getFeatures(planType)" 
          :key="index"
          class="text-gray-700"
        >
          {{ feature }}
        </li>
      </ul>
    </div>
    
    <button 
      @click.stop="selectPlanAndNavigate"
      class="mt-6 w-full py-2 rounded-md font-medium transition-colors duration-200"
      :class="[
        isSelected 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
      ]"
    >
      {{ $t('pricing.button') }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import type { PlanType } from '../stores/pricingStore'
  import { usePricingStore } from '../stores/pricingStore'
  import i18n from '../i18n'

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

  const featureCount = {
    'free': 3,
    'basic': 4,
    'advanced': 6
  }

  function getFeatures(planType: PlanType): string[] {
    const count = featureCount[planType] || 0
    const features: string[] = []
    
    for (let i = 0; i < count; i++) {
      features.push(i18n.global.t(`pricing.${planType}.features.${i}`))
    }
    
    return features
  }
</script>

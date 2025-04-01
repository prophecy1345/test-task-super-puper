<template>
  <div class="mt-4 flex-grow">
    <h4 class="font-semibold mb-2">Features</h4>
    <ul class="space-y-2">
      <li v-for="(feature, index) in features" :key="index" class="text-gray-700">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import i18n from '../../i18n'
  import type { PlanType } from '../../stores/pricingStore'

  const props = defineProps<{
    planType: PlanType
  }>()

  // Define the number of features for each plan type
  const featureCount: Record<PlanType, number> = {
    'free': 3,
    'basic': 4,
    'advanced': 6
  }

  const features = computed(() => {
    const result: string[] = []
    const count = featureCount[props.planType]
    
    for (let i = 0; i < count; i++) {
      const key = `pricing.${props.planType}.features.${i}`
      const translation = i18n.global.t(key)
      
      // Only add the feature if it's a valid translation
      if (translation !== key) {
        result.push(translation)
      }
    }

    return result
  })
</script>

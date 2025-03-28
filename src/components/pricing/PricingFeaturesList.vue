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

  const props = defineProps({
    planType: {
      type: String,
      required: true
    }
  })

  const features = computed(() => {
    const result = []
    let index = 0

    while (true) {
      const featureKey = `pricing.${props.planType}.features.${index}`
      try {
        const feature = i18n.global.t(featureKey)
        
        if (feature === featureKey) {
          break
        }
        
        result.push(feature)
        index++
      } catch {
        break
      }
    }

    return result
  })
</script>

<template>
  <button
    @click="$emit('select')"
    class="mt-6 w-full py-2 rounded-md font-medium transition-colors duration-200"
    :class="[
      isSelected
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
    ]"
  >
    {{ $t('pricing.button') }}
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    isSelected: boolean
  }>()

  defineEmits<{
    (e: 'select'): void
  }>()
</script>

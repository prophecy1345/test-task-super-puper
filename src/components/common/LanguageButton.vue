<template>
  <button
    @click="$emit('change', locale)"
    :class="[
      'px-2 py-1 rounded transition-colors',
      isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'
    ]"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
  defineProps({
    locale: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  })

  defineEmits(['change'])
</script>

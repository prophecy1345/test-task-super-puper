<template>
  <div v-if="show" class="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
    {{ $t('order.success') }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>

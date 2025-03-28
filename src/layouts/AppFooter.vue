<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-xl font-bold mb-4 md:mb-0">SuperPuper</div>
        <AppNavigation theme="dark" class="mb-4 md:mb-0" />
      </div>
      <div class="text-center mt-6 text-gray-400">
        {{ $t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import AppNavigation from '../components/common/AppNavigation.vue'
</script>

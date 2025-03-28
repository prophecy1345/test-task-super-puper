<script setup lang="ts">
  import { watch } from 'vue'
  import { useRoute } from 'vue-router'
  import i18n from './i18n'

  const route = useRoute()

  watch(
    () => route.params.locale,
    (newLocale) => {
      if (newLocale && typeof newLocale === 'string' && newLocale !== i18n.global.locale.value) {
        i18n.global.locale.value = newLocale
      }
    }
  )
</script>

<template>
  <RouterView />
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: #333;
    line-height: 1.6;
  }
</style>

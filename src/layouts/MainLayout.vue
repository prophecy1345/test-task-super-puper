<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader @changeLocale="changeLocale" />

    <main class="flex-grow">
      <slot ></slot>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import i18n from '../i18n'
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'

  const router = useRouter()
  const currentLocale = computed(() => i18n.global.locale.value)

  const changeLocale = (newLocale: string) => {
    if (currentLocale.value !== newLocale) {
      const { name, params, query, hash } = router.currentRoute.value
      const clonedParams = { ...params, locale: newLocale }

      router.push({
        name,
        params: clonedParams,
        query,
        hash
      })

      i18n.global.locale.value = newLocale
    }
  }
</script>

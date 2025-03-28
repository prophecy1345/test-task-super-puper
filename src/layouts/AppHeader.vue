<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto py-4 px-6 flex justify-between items-center">
      <div class="flex items-center">
        <RouterLink :to="`/${currentLocale}`" class="text-2xl font-bold text-blue-600">
          SuperPuper
        </RouterLink>
      </div>
      <div class="hidden md:flex items-center">
        <AppNavigation theme="light" class="mr-4">
          <div class="flex items-center space-x-2 ml-6">
            <LanguageButton
              locale="en"
              label="EN"
              :isActive="currentLocale === 'en'"
              @change="onLanguageChange"
            />
            <LanguageButton
              locale="ru"
              label="RU"
              :isActive="currentLocale === 'ru'"
              @change="onLanguageChange"
            />
          </div>
        </AppNavigation>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import i18n from '../i18n'
  import LanguageButton from '../components/common/LanguageButton.vue'
  import AppNavigation from '../components/common/AppNavigation.vue'

  const currentLocale = computed(() => i18n.global.locale.value)

  const emit = defineEmits(['changeLocale'])

  function onLanguageChange(locale: string) {
    emit('changeLocale', locale)
  }
</script>

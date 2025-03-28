<template>
  <MainLayout>
    <div class="container mx-auto px-6 py-10">
      <h1 class="text-3xl font-bold mb-8">{{ $t('navigation.terms') }}</h1>
      <div class="prose prose-lg max-w-none">
        <div v-if="currentLocale === 'en'" v-html="sanitizedEnTerms"></div>
        <div v-else v-html="sanitizedRuTerms"></div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import MainLayout from '../layouts/MainLayout.vue'
  import i18n from '../i18n'
  import enMarkdown from '../markdown/tos.en.md?raw'
  import ruMarkdown from '../markdown/tos.ru.md?raw'
  import { marked } from 'marked'
  import DOMPurify from 'dompurify'

  const currentLocale = computed(() => i18n.global.locale.value)

  const compiledEnTerms = marked(enMarkdown) as string
  const compiledRuTerms = marked(ruMarkdown) as string

  const sanitizedEnTerms = DOMPurify.sanitize(compiledEnTerms)
  const sanitizedRuTerms = DOMPurify.sanitize(compiledRuTerms)
</script>

<template>
  <nav :class="[baseClasses, wrapperClass]">
    <RouterLink
      v-for="item in navItems"
      :key="item.path"
      :to="`/${currentLocale}${item.path}`"
      class="transition"
      :class="isActive(item.path) ? activeClasses : inactiveClasses"
    >
      {{ $t(item.labelKey) }}
    </RouterLink>
    <slot></slot>
  </nav>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import i18n from '../../i18n'

  const route = useRoute()
  const currentLocale = computed(() => i18n.global.locale.value)

  const props = defineProps({
    theme: {
      type: String,
      default: 'light',
      validator: (value: string) => ['light', 'dark'].includes(value)
    },
    wrapperClass: {
      type: String,
      default: 'flex space-x-6'
    }
  })

  const navItems = [
    { path: '/', labelKey: 'navigation.home' },
    { path: '/tos', labelKey: 'navigation.terms' },
    { path: '/order', labelKey: 'navigation.order' }
  ]

  const baseClasses = computed(() => {
    return props.theme === 'light' ? 'text-gray-700' : 'text-gray-300'
  })

  const activeClasses = computed(() => {
    return props.theme === 'light' ? 'text-blue-600 font-medium' : 'text-white font-medium'
  })

  const inactiveClasses = computed(() => {
    return props.theme === 'light' ? 'hover:text-blue-600' : 'hover:text-white'
  })

  function isActive(path: string): boolean {
    const currentPath = route.path.split(`/${currentLocale.value}`)[1] || '/'
    return currentPath === path
  }
</script>

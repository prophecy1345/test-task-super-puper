<template>
  <HeroContainer>
    <HeroTitle />
    <HeroDescription />
    <HeroButton />
  </HeroContainer>
</template>

<script setup lang="ts">
  import HeroContainer from './hero/HeroContainer.vue'
  import HeroTitle from './hero/HeroTitle.vue'
  import HeroDescription from './hero/HeroDescription.vue'
  import HeroButton from './hero/HeroButton.vue'
</script>

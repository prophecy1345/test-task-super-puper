<template>
  <MainLayout>
    <div class="container mx-auto px-6 py-10">
      <PlanSelection />
      <AccountForm />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
  import MainLayout from '../layouts/MainLayout.vue'
  import PlanSelection from '../components/order/PlanSelection.vue'
  import AccountForm from '../components/order/AccountForm.vue'
</script>

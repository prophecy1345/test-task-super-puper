<template>
  <section class="relative hero-section text-white py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-2xl">
        <slot></slot>
      </div>
    </div>
    <div class="absolute inset-0 bg-overlay"></div>
  </section>
</template>

<style scoped>
  .hero-section {
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.3;
  }

  .bg-overlay {
    background-color: rgb(17 24 39 / 40%);
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .hero-section .container {
    position: relative;
    z-index: 2;
  }
</style>

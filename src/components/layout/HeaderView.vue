<template>
  <header class="flex justify-center w-full h-[65px] bg-dark-blue">
    <div class="flex justify-between items-center w-[1440px] px-5 xl:px-20">
      <main-logo />
      <navigation-bar />
    </div>
  </header>
</template>

<script setup lang="ts">
import MainLogo from '@/components/shared/MainLogo.vue';
import NavigationBar from '@/components/shared/NavigationBar.vue';
</script>

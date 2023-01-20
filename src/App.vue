<template>
  <header-view />
  <div
    class="flex flex-col justify-center px-3 xl:px-[0px] m-auto max-w-[1294px] py-[94px] [21px]"
  >
    <router-view />
  </div>
</template>

<script lang="ts">
import './index.css';
import HeaderView from '@/components/layout/HeaderView.vue';

export default {
  name: 'App',
  components: { HeaderView },
};
</script>

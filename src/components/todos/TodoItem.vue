<template>
  <div
    class="flex flex-nowrap flex-row px-[18px] justify-between items-center rounded-md border border-solid border-light-grey w-full h-[60px]"
  >
    <item-details :item="item" />
    <item-actions :item="item" />
  </div>
</template>

<script setup lang="ts">
import ItemActions from '@/components/todos/ItemActions.vue';
import ItemDetails from '@/components/todos/ItemDetails.vue';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-[3px] flex-nowrap min-w-[67px]">
    <button class="p-2" @click="setEditing">
      <img src="../../assets/icons/edit.svg" alt="editItem button" />
    </button>
    <button class="p-2" @click="remove">
      <img src="../../assets/icons/remove.svg" alt="editItem button" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const store = useStore();

const setEditing = () => store.dispatch('setEditingItem', props.item);
const remove = () => store.dispatch('removeTodoItem', props.item.id);
</script>

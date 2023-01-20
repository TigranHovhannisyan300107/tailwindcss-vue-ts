<template>
  <div class="flex gap-[10px] items-center">
    <input
      type="text"
      class="h-[48px] w-full border border-solid border-light-grey rounded-lg p-3"
      v-model="text"
      ref="textRef"
    />
    <input
      type="button"
      class="cursor-pointer bg-light-blue text-white text-base font-semibold w-[129px] h-[46px] flex justify-center items-center rounded-lg hover:opacity-70"
      @click="editingItem ? editItem() : addItem()"
      :value="editingItem ? 'Save' : 'Add'"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, Ref, ref, watch } from 'vue';
import { Store, useStore } from 'vuex';
import { IVuexTodosModel } from '@/types';

const store: Store<IVuexTodosModel> = useStore();
const editingItem = computed(() => store.getters.editingItem);
const text: Ref<string> = ref(editingItem.value?.text || '');
const textRef: Ref<HTMLInputElement | null> = ref(null);

watch(editingItem, () => {
  if (editingItem.value) {
    text.value = editingItem.value.text;
    if (textRef.value) textRef.value.focus();
  }
});

const editItem = () => {
  store.dispatch('editTodoItem', {
    ...editingItem.value,
    text: text.value,
  });
  text.value = '';
};

const addItem = () => {
  store.dispatch('addTodoItem', text.value);
  text.value = '';
};
</script>

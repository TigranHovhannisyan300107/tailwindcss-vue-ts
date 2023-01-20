<template>
  <div class="flex flex-col gap-[7px] py-[21px]">
    <div v-for="item in todoList" :key="item.id">
      <todo-item :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { Store, useStore } from 'vuex';

import { IVuexTodosModel, ITodoItem } from '@/types';
import TodoItem from '@/components/todos/TodoItem.vue';

const store: Store<IVuexTodosModel> = useStore();
const todoList: ComputedRef<Array<ITodoItem>> = computed(
  () => store.getters.todos
);
</script>

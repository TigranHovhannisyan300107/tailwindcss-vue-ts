<template>
  <div class="ml-[14px]">
    <todo-input />
    <todo-list />
  </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/todos/TodoList.vue';
import TodoInput from '@/components/todos/TodoInput.vue';
</script>

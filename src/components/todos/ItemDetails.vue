<template>
  <div class="flex items-center flex-row gap-[13px] w-8/12">
    <div
      v-if="done"
      @click="changeState()"
      class="bg-center bg-no-repeat cursor-pointer w-[20px] h-[20px] rounded bg-checked border-light-blue bg-light-blue border-solid border-grey-400"
    ></div>
    <div
      v-else
      @click="changeState()"
      class="bg-center bg-no-repeat cursor-pointer w-[20px] h-[20px] rounded border border-grey-400"
    ></div>
    <p
      class="w-full whitespace-nowrap text-ellipsis overflow-hidden text-grey-900"
      :class="{ 'line-through': item.done }"
    >
      {{ item.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Store, useStore } from 'vuex';
import { ref, Ref, watch } from 'vue';
import { IVuexTodosModel } from '@/types';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const done: Ref<boolean> = ref(props.item.done);
const store: Store<IVuexTodosModel> = useStore();

const changeState = () => (done.value = !done.value);

watch(done, () => store.dispatch('toggleTodoItem', props.item.id));
</script>

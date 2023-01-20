import { IVuexTodosModel, ITodoItem } from '@/types';

const todos = (state: IVuexTodosModel): ITodoItem[] => state.todos;
const editingItem = (state: IVuexTodosModel): ITodoItem | null =>
  state.editingItem;

export default {
  todos,
  editingItem,
};

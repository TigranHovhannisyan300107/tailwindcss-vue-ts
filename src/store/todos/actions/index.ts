import { ActionContext } from 'vuex';
import { IVuexTodosModel, ITodoItem } from '@/types';

const addTodoItem = (
  context: ActionContext<IVuexTodosModel, IVuexTodosModel>,
  payload: string
): void => context.commit('addTodoItem', payload);

const editTodoItem = (
  context: ActionContext<IVuexTodosModel, IVuexTodosModel>,
  payload: ITodoItem
): void => context.commit('editTodoItem', payload);

const removeTodoItem = (
  context: ActionContext<IVuexTodosModel, IVuexTodosModel>,
  payload: number
): void => context.commit('removeTodoItem', payload);

const toggleTodoItem = (
  context: ActionContext<IVuexTodosModel, IVuexTodosModel>,
  payload: number
): void => context.commit('toggleTodoItem', payload);

const setEditingItem = (
  context: ActionContext<IVuexTodosModel, IVuexTodosModel>,
  payload: ITodoItem
): void => context.commit('setEditingItem', payload);

export default {
  addTodoItem,
  editTodoItem,
  removeTodoItem,
  toggleTodoItem,
  setEditingItem,
};

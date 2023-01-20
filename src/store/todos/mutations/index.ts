import { IVuexTodosModel, ITodoItem, STORAGE } from '@/types';

const addTodoItem = (state: IVuexTodosModel, payload: string) => {
  if (!payload) return;

  const item = { text: payload, done: false, id: 1 };

  if (state.todos.length) {
    const lastItem = state.todos.at(-1);
    if (lastItem) item.id = lastItem.id + 1;
  }

  state.todos.push(item);
  state.editingItem = null;
  localStorage.setItem(STORAGE, JSON.stringify(state.todos));
};

const removeTodoItem = (state: IVuexTodosModel, payload: number) => {
  const found = state.todos.findIndex((item: ITodoItem) => item.id === payload);
  if (found === -1) return;

  state.todos.splice(found, 1);
  state.editingItem = null;
  localStorage.setItem(STORAGE, JSON.stringify(state.todos));
};

const editTodoItem = (state: IVuexTodosModel, payload: ITodoItem) => {
  const found = state.todos.findIndex(
    (item: ITodoItem) => item.id === payload.id
  );
  if (found === -1) return;

  state.todos[found].text = payload.text;
  state.editingItem = null;
  localStorage.setItem(STORAGE, JSON.stringify(state.todos));
};

const toggleTodoItem = (state: IVuexTodosModel, payload: number) => {
  const found = state.todos.findIndex((item: ITodoItem) => item.id === payload);
  if (found === -1) return;

  state.todos[found].done = !state.todos[found].done;
  localStorage.setItem(STORAGE, JSON.stringify(state.todos));
};

const initialiseStore = (state: IVuexTodosModel) => {
  const persistedList = localStorage.getItem(STORAGE);
  if (!persistedList) return;

  state.todos = JSON.parse(persistedList);
};

const setEditingItem = (state: IVuexTodosModel, payload: ITodoItem) => {
  state.editingItem = payload;
};

export default {
  initialiseStore,
  addTodoItem,
  editTodoItem,
  removeTodoItem,
  toggleTodoItem,
  setEditingItem,
};

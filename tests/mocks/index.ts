import { IVuexTodosModel } from '@/types';

export const todoItemMock = { id: 2, text: 'Todo 2', done: true };

export const todoListMock = [
  { id: 1, text: 'Todo 1', done: false },
  { id: 2, text: 'Todo 2', done: true },
  { id: 3, text: 'Todo 3', done: false },
];

export const mockedTodoState = {
  todos: [],
  editingItem: null,
};

export const mockedTodoStore = {
  state: mockedTodoState,
  getters: {
    todos: (state: IVuexTodosModel) => state.todos,
    editingItem: (state: IVuexTodosModel) => state.editingItem,
  },
  actions: {},
  mutations: {},
};

export const mockedContext = {
  state: mockedTodoState,
  rootState: mockedTodoState,
  commit: jest.fn(),
  getters: jest.fn(),
  dispatch: jest.fn(),
  rootGetters: jest.fn(),
};

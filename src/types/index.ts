export const STORAGE = 'STORAGE';

export interface IVuexTodosModel {
  todos: ITodoItem[];
  editingItem: ITodoItem | null;
}

export interface IVuexRootStore {
  todos: IVuexTodosModel;
}

export interface ITodoItem {
  id: number;
  text: string;
  done: boolean;
}

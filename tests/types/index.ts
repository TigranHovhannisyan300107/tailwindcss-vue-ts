import { IVuexTodosModel } from '@/types';

export interface IVuexMock {
  state: IVuexTodosModel;
  rootState: IVuexTodosModel;
  commit: jest.Mock;
  getters: jest.Mock;
  dispatch: jest.Mock;
  rootGetters: jest.Mock;
}

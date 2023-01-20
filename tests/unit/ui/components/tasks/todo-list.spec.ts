import { mount, VueWrapper } from '@vue/test-utils';
import { createStore, Store } from 'vuex';

import { IVuexTodosModel } from '@/types';
import TodoList from '@/components/todos/TodoList.vue';
import { mockedTodoState, mockedTodoStore, todoListMock } from '@t/mocks';

describe('TodoList', () => {
  let wrapper: VueWrapper<InstanceType<typeof TodoList>>;
  let store: Store<IVuexTodosModel>;

  beforeEach(() => {
    store = createStore({
      ...mockedTodoStore,
      state: {
        ...mockedTodoState,
        todos: todoListMock,
      },
    });
    wrapper = mount(TodoList, {
      global: {
        plugins: [store],
        stubs: {
          'todo-item': true,
        },
      },
    });
  });

  it('should render all todo items', () => {
    expect(wrapper.findAllComponents('todo-item-stub').length).toBe(3);
  });

  it('should call store getters todos', () => {
    expect(store.getters.todos).toStrictEqual(todoListMock);
  });
});

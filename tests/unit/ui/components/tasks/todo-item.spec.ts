import { createStore, Store } from 'vuex';

import { IVuexTodosModel } from '@/types';
import { mockedTodoStore } from '@t/mocks';
import { mount, VueWrapper } from '@vue/test-utils';
import TodoItem from '@/components/todos/TodoItem.vue';

describe('TodoItem', () => {
  let wrapper: VueWrapper<InstanceType<typeof TodoItem>>;
  let store: Store<IVuexTodosModel>;

  beforeEach(() => {
    store = createStore(mockedTodoStore);
    store.dispatch = jest.fn();
    store.state.todos[0] = {
      id: 1,
      text: 'Test todo item',
      done: false,
    };
    wrapper = mount(TodoItem, {
      props: {
        item: store.state.todos[0],
      },
      global: {
        plugins: [store],
      },
    });
  });

  test('displays the todo item text', () => {
    const text = wrapper.find('p');
    expect(text.text()).toBe('Test todo item');
  });

  test('displays the line-through class when done is true', async () => {
    const text = wrapper.find('p');
    expect(text.classes('line-through')).toBe(false);
    await wrapper.setProps({
      item: {
        id: 1,
        text: 'Test todo item',
        done: true,
      },
    });
    expect(text.classes('line-through')).toBe(true);
  });

  test('dispatches the SET_EDITING_ITEM action when editItem button is clicked', async () => {
    const spy = jest.spyOn(store, 'dispatch');
    const editButton = wrapper.findAll('button')[0];
    await editButton.trigger('click');
    expect(spy).toHaveBeenCalledWith('setEditingItem', wrapper.props().item);
  });

  test('dispatches the REMOVE_TODO_ITEM action when remove button is clicked', async () => {
    const spy = jest.spyOn(store, 'dispatch');
    const removeButton = wrapper.findAll('button')[1];
    await removeButton.trigger('click');
    expect(spy).toHaveBeenCalledWith('removeTodoItem', wrapper.props().item.id);
  });
});

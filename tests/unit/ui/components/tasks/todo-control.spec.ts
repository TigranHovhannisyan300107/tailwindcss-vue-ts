import { createStore, Store } from 'vuex';
import { shallowMount, VueWrapper } from '@vue/test-utils';

import { IVuexTodosModel } from '@/types';
import { mockedTodoStore, todoItemMock } from '@t/mocks';
import TodoInput from '@/components/todos/TodoInput.vue';

describe('TodoInput', () => {
  let wrapper: VueWrapper<InstanceType<typeof TodoInput>>;
  let store: Store<IVuexTodosModel>;

  beforeEach(() => {
    store = createStore(mockedTodoStore);
    store.dispatch = jest.fn();
    wrapper = shallowMount(TodoInput, {
      global: {
        plugins: [store],
      },
    });
  });

  it('should render input element', () => {
    expect(wrapper.find('input[type=text]').exists()).toBe(true);
  });

  it('should render input element with type button', () => {
    expect(wrapper.find('input[type=button]').exists()).toBe(true);
  });

  it('should render input element with value "Add"', () => {
    expect(wrapper.find('input[type=button]').attributes('value')).toBe('Add');
  });

  it('should call addItem when clicking on Add button', async () => {
    await wrapper.find('input[type=button]').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('addTodoItem', '');
  });

  it('should render input element with value "Save"', () => {
    store.state.editingItem = todoItemMock;
    wrapper = shallowMount(TodoInput, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.find('input[type=button]').attributes('value')).toBe('Save');
  });

  it('should call editItem when clicking on Save button', async () => {
    store.state.editingItem = todoItemMock;
    wrapper = shallowMount(TodoInput, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.vm.$refs.textRef.value).toBe(todoItemMock.text);
    await wrapper.find('input[type=button]').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('editTodoItem', todoItemMock);
  });
});

import { shallowMount, VueWrapper } from '@vue/test-utils';
import TasksView from '@/views/TodoPage.vue';

describe('TasksView', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(TasksView, {
      global: {
        stubs: {
          'todo-input': true,
          'todo-list': true,
        },
      },
    });
  });

  it('should render TodoInput component', () => {
    expect(wrapper.findComponent('todo-input-stub').exists()).toBe(true);
  });

  it('should render TodoList component', () => {
    expect(wrapper.findComponent('todo-list-stub').exists()).toBe(true);
  });
});

import actions from '@/store/todos/actions';
import { mockedContext } from '@t/mocks';
import { IVuexMock } from '@t/types';

describe('actions', () => {
  let context: IVuexMock;

  beforeEach(() => {
    context = mockedContext;
  });

  it('should call commit with ADD_TODO_ITEM and payload', () => {
    actions['addTodoItem'](context, 'Test Todo');
    expect(context.commit).toHaveBeenCalledWith('addTodoItem', 'Test Todo');
  });

  it('should call commit with EDIT_TODO_ITEM and payload', () => {
    const payload = { id: 1, text: 'Test Todo Edited', done: false };
    actions['editTodoItem'](context, payload);
    expect(context.commit).toHaveBeenCalledWith('editTodoItem', payload);
  });

  it('should call commit with REMOVE_TODO_ITEM and payload', () => {
    actions['removeTodoItem'](context, 1);
    expect(context.commit).toHaveBeenCalledWith('removeTodoItem', 1);
  });

  it('should call commit with TOGGLE_TODO_ITEM and payload', () => {
    actions['toggleTodoItem'](context, 1);
    expect(context.commit).toHaveBeenCalledWith('toggleTodoItem', 1);
  });

  it('should call commit with SET_EDITING_ITEM and payload', () => {
    const payload = { id: 1, text: 'Test Todo Edited', done: false };
    actions['setEditingItem'](context, payload);
    expect(context.commit).toHaveBeenCalledWith('setEditingItem', payload);
  });
});

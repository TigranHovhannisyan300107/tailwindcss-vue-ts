import { createStore } from 'vuex';
import todos from '@/store/todos';

export default createStore({
  modules: {
    todos,
  },
});

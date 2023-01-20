import { createApp } from 'vue';

import store from '@/store';
import App from '@/App.vue';
import router from '@/router';

createApp({
  extends: App,
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
})
  .use(store)
  .use(router)
  .mount('#app');

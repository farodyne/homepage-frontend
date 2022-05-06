import { createApp } from 'vue';
import app from './app.vue';
import router from './router';
import { settings } from '@/utils';

const appInstance = createApp(app);

appInstance.use(router);

appInstance.mount('#app');

console.log('AAAAAAAAAAAAAAAA', settings);

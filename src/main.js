import { createApp } from 'vue';
import app from './app.vue';
import router from './router';

const appInstance = createApp(app);

appInstance.use(router);

appInstance.mount('#app');

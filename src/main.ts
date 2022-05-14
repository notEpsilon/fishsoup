import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './index.scss';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router)
app.use(createPinia());

app.mount('#app');

import { createApp } from 'vue'
import App from './App'
import router from "@/router/router";
import VFocus from '@/directives/VFocus';
import { store } from './store';


const app = createApp(App)


app
    .use(store)
    .directive('focus', VFocus)
    .use(router)
    .mount('#app');
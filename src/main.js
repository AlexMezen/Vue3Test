import { createApp } from 'vue'
import App from './App'
import router from "@/router/router";
import VFocus from '@/directives/VFocus';
import { store } from './store';
import vue3GoogleOauth2 from 'vue3-google-login'

const CLIENT_ID = "1099259484544-bm87dh62d4hlm19i13eg9iu3l3n9mlrf.apps.googleusercontent.com"

const app = createApp(App)


app
    .use(vue3GoogleOauth2, {clientId: CLIENT_ID})
    .use(store)
    .directive('focus', VFocus)
    .use(router)
    .mount('#app');
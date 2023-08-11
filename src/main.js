import { createApp } from 'vue'
import App from './App'
import router from "@/router/router";
import directives from '@/directives';
import VFocus from '@/directives/VFocus';

// directives.forEach(directive => {
//     app.directive(directive.name, directive)
// })


const app = createApp(App)


app
    .directive('focus', VFocus)
    .use(router)
    .mount('#app');
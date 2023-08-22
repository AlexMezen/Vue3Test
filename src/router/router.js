import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import About from "@/pages/About"


const routes = [
    {
        path: '/',
        component: Main
    },

    {
        path: '/about',
        component: About
    },
    

    
    
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
import {createRouter,createWebHistory} from "vue-router";
import VAvtorization from "@/components/v-avtorization";
import VAnalitics from "@/components/v-analitics";
const routes = [
    {
        path:'/',
        name:'VAvtorization',
        component:VAvtorization
    },
    {
        path:'/Analitics',
        name:'VAnalitics',
        component:VAnalitics
    }
]
const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router
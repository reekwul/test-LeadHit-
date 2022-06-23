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
        path:'/analitics',
        name:'VAnalitics',
        component:VAnalitics,
        beforeEnter: (to,from,next)=>{
            if(localStorage.getItem('value')){
                console.log(localStorage.getItem('value'));
                next()
            }else {
                next({neme: 'VAvtorization'})
            }
        }
    }
]
const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router
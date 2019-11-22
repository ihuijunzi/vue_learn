import Vue from 'vue'
import VueRouter from 'vue-router'
// import About from '../views/About.vue'
const About = () => import("../views/About.vue");
import Home from '../views/Home.vue'
import Language from '../views/Language.vue'
import Company from '../views/Company.vue'
import CompanyInfo from '../views/CompanyInfo.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'language',
                    component: Language
                },
                {
                    path: 'company',
                    component: Company,
                    children: [
                        {
                            path: '/home/company/info/:id',
                            component: CompanyInfo
                        }
                    ]
                },
                {
                    path: '',
                    component: Language
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

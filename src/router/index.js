import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import requirements from '../pages/requirements'
Vue.use(Router);

export default new Router({
    routes:[
        {
            path: "/",
            component: home,
            name:"home"
        },
        {
            path: "/requirements",
            component: requirements,
            name:"requirements"
        },
        {
            path: "/home",
            component: home,
            name:"home"
        },
    ]
})
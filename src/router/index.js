import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import requirements from '../pages/requirements'
import research from '../pages/research'
import hci from '../pages/hci'
import design from '../pages/design'
import achievement from '../pages/achievement'
import plan from '../pages/plan'
import appendices from '../pages/appendices'
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
            path: "/research",
            component: research,
            name:"research"
        },
        {
            path: "/hci",
            component: hci,
            name:"hci"
        },
        {
            path: "/design",
            component: design,
            name:"design"
        },
        {
            path: "/achievement",
            component: achievement,
            name:"achievement"
        },
        {
            path: "/plan",
            component: plan,
            name:"plan"
        },
        {
            path: "/appendices",
            component: appendices,
            name:"appendices"
        },
    ]
})
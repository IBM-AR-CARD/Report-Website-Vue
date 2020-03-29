import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import requirements from '../pages/requirements'
import research from '../pages/research'
import hci from '../pages/hci'
import design from '../pages/design'
import evaluation from '../pages/evaluation'
import testing from '../pages/testing'
import appendices from '../pages/appendices'
Vue.use(Router);

export default new Router({
    scrollBehavior (to, from, savedPosition) {
        document.querySelector(".navbar-toggler").setAttribute("aria-expanded", "false");
        return new Promise((resolve) => {
            setTimeout(() => {
                if (savedPosition) {
                    resolve(savedPosition)
                } else {
                    resolve({ x: 0, y: 0 })
                }
            }, 200)
        })
    },
    linkActiveClass: "active",
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
            path: "/testing",
            component: testing,
            name:"testing"
        },
        {
            path: "/evaluation",
            component: evaluation,
            name:"evaluation"
        },
        {
            path: "/appendices",
            component: appendices,
            name:"appendices"
        },
        {
            path: "/index.html",
            redirect: "/"
        }
    ]
})
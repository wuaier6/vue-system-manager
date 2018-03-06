import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/login', name: 'login', component: resolve => require(['../components/pages/auth/login.vue'], resolve)},
    ,{
            path: '/readme',
            component: resolve => require(['../components/common/layout.vue'], resolve),
            children:[
                {
                    path: '/',
                    name:'home',
                    component: resolve => require(['../components/pages/home.vue'], resolve)
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/pages/form.vue'], resolve)
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/pages/upload.vue'], resolve)
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/pages/active_list.vue'], resolve)
                }
            ]
        },
  ]
})

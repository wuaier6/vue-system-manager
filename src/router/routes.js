import HelloWorld from '@/components/HelloWorld'


export default [
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
                    name:'form',
                    path: '/form/:id',
                    component: resolve => require(['../components/pages/form.vue'], resolve)
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/pages/upload.vue'], resolve)
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/pages/active_list.vue'], resolve)
                },
                {
                  path: '/foo',
                  component: resolve => require(['../components/pages/home.vue'], resolve),
                  children: [
                    {
                     path: 'bar',
                    component: resolve => require(['../components/pages/home.vue'], resolve),
                      // a meta field
                      meta: { requiresAuth: true }
                    }
                  ]
                }
            ]
        },
  ];
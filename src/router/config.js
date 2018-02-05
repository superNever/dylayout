/**
 * Created by wanghongxiang on 2018/2/3.
 */

const routers = [
  {
    path: '/',
    meta: {
      title: ''
    },
    component: (resolve) => require(['@/components/HelloWorld.vue'], resolve)
  },
  {
    path: '/login',
    meta: {
      title: 'login'
    },
    component: (resolve) => require(['@/pages/login/index.vue'], resolve),
    children: [
      {
        path: 'register',
        meta: {
          title: 'register'
        },
        component: (resolve) => require(['@/pages/login/register.vue'], resolve)
      },
      {
        path: 'loginin',
        meta: {
          title: 'loginin'
        },
        component: (resolve) => require(['@/pages/login/loginin.vue'], resolve)
      }
    ]
  },
  {
    path: '/tmpl',
    meta: {
      title: 'template'
    },
    component: (resolve) => require(['@/pages/dytmpl/index.vue'], resolve)
  }
]
export default routers

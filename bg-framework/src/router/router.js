import main from '@/views/main';

// 不作为 main 组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/',
  alias: '/login',
  name: 'login',
  component: () => import('@/views/login')
}
export const homeRouter = {
  path: '/home',
  name: 'home',
  component: () => import('@/views/home')
}

// 作为 main 组件的子页面展示并且在左侧菜单显示的路由写在 appRouter 里
export const appRouter = [{
  path: '/data',
  name: 'data',
  component: main,
  children: [{
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/list')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/detail')
    }
  ]
}];

export const routes = [
  loginRouter,
  homeRouter,
  ...appRouter
];
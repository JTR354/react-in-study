export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
          },
          // {
          //   path: '/',
          //   name: 'admin',
          //   icon: 'crown',
          //   component: './Admin',
          //   authority: ['admin'],
          //   routes: [
          //     {
          //       path: '/admin/sub-page',
          //       name: 'sub-page',
          //       icon: 'smile',
          //       component: './Welcome',
          //       authority: ['admin'],
          //     },
          //     {
          //       path: '/demo1/demo1',
          //       name: 'demo1',
          //       icon: 'smile',
          //       component: './demo1/demo1',
          //       authority: ['admin'],
          //     },
          //   ],
          // },
          {
            path: '/admin/sub-page',
            name: 'sub-page',
            icon: 'smile',
            component: './Welcome',
            authority: ['admin'],
          },
          {
            path: '/demo1/demo1',
            name: 'demo1',
            icon: 'smile',
            component: './demo1/demo1',
            authority: ['admin'],
          },
          {
            name: 'list.table-list',
            icon: 'table',
            path: '/list',
            component: './ListTableList',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '*',
    component: './404',
  },
]
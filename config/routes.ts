export default [
  { path: '/user', layout: false, routes: [
    { path: '/user/login', component: './User/Login' },
    { path: '/user/register', component: './User/Register' }
    ]},
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    icon: 'crown',
    name: '管理页',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page'},
      { path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage'},
    ],
  },
  {
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];

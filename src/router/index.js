import { createRouter, createWebHashHistory } from 'vue-router'

// import SystemUser from './modules/SystemUser'
// import SystemRole from './modules/SystemRole'
// import SystemMuser from './modules/SystemMuser'
// import SystemDept from './modules/SystemDept'
// import AuditLeave from './modules/AuditLeave'
// import AuditApprove from './modules/AuditApprove'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/Welcome',
    component: () => import('../layout'),
    children: [
      {
        path: '/Welcome',
        name: 'Welcome',
        component: () => import('../views/Welcome'),
        meta: {
          title: '欢迎体验Vue3全栈课程'
        }
      },
      {
        path: '/system/user',
        name: '/system/user',
        component: () => import('../views/system_user'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/system/muser',
        name: '/system/muser',
        component: () => import('../views/system_muser'),
        meta: {
          title: '菜单管理'
        }
      },
      {
        path: '/system/dept',
        name: '/system/dept',
        component: () => import('../views/system_dept'),
        meta: {
          title: '部门管理'
        }
      },
      {
        path: '/system/role',
        name: '/system/role',
        component: () => import('../views/system_role'),
        meta: {
          title: '菜单管理'
        }
      },
      {
        path: '/audit/leave',
        component: () => import('../views/audit_leave'),
        meta: {
          title: '休假审批'
        }
      },
      {
        path: '/audit/approve',
        component: () => import('../views/audit_approve'),
        meta: {
          title: '待审批'
        }
      }
    ]
  }
]

// 私有路由表
// export const privateRoutes = [
//   SystemUser,
//   SystemRole,
//   SystemMuser,
//   SystemDept,
//   AuditLeave,
//   AuditApprove
// ]

const router = createRouter({
  history: createWebHashHistory(),
  // routes: [...publicRoutes, ...privateRoutes]
  routes
})

export default router

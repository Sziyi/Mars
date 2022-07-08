import Layout from '../../layout'

export default {
  path: '/system',
  component: Layout,
  name: '系统管理',
  meta: {
    title: '系统管理',
    icon: 'Setting'
  },
  children: [
    {
      path: '/system/role',
      component: () => import('../../views/system_role'),
      meta: {
        title: '角色管理'
      }
    }
  ]
}

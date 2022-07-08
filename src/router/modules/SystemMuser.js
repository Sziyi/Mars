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
      path: '/system/muser',
      component: () => import('../../views/system_muser'),
      meta: {
        title: '菜单管理'
      }
    }
  ]
}

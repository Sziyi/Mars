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
      path: '/system/dept',
      component: () => import('../../views/system_dept'),
      meta: {
        title: '部门管理'
      }
    }
  ]
}

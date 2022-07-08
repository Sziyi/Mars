import Layout from '../../layout'

export default {
  path: '/audit',
  component: Layout,
  name: '审批管理',
  meta: {
    title: '审批管理',
    icon: 'Setting'
  },
  children: [
    {
      path: '/audit/approve',
      component: () => import('../../views/audit_approve'),
      meta: {
        title: '待审批'
      }
    }
  ]
}

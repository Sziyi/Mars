import Layout from '../../layout'

export default {
  path: '/audit',
  component: Layout,
  name: '审批管理',
  meta: {
    title: '审批管理',
    icon: 'Promotion'
  },
  children: [
    {
      path: '/audit/leave',
      component: () => import('../../views/audit_leave'),
      meta: {
        title: '休假审批'
      }
    }
  ]
}

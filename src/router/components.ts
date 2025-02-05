export default {
  path: '/components',
  redirect: '/components/form',
  meta: {
    icon: 'ri:command-line',
    name: '组件',
    hidden: false,
    target: 'blank',
    keepAlive: true,
    roles: ['admin'],
  },
  children: [
    {
      path: '/components/form',
      name: 'formComponent',
      component: () => import('@/views/components/form/index.vue'),
      meta: { name: '表单组件' },
    },
  ],
}

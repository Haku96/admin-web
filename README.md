### 参考资料

- [源码参考](https://github.com/arco-design/arco-design-pro-vue)
- [参考网站](https://pure-admin-thin.netlify.app/#/login)

### 实战笔记

- ref 与 reactive 区别与实战指南，推荐首选 ref，[官方文档](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state-1)
- 在 Vite 项目中，import.meta.env 是用于在客户端代码中访问环境变量的方式，但它在 vite.config.ts 文件中无法直接使用。这是因为 vite.config.ts 是在构建过程中运行的，而 import.meta.env 是在客户端环境中才可用。
- `@/assets/500.svg?component` svg 图片添加 `component` 后缀，表示将 svg 文件转换为 Vue 组件，借助插件 `vite-svg-loader`
- 在 Pinia 中，直接解构 Store 的状态会导致响应性丢失，方法不会。解构状态 `const { name } = storeToRefs(useUserStore())`

```js
// vite.config.ts 中使用 import.meta.env
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
        },
      },
    },
  }
})

// setup script 中定义组件
const vButton = defineComponent({
  setup() {},

  render() {
    return <div>{this.$slots.default?.()}</div>
  },
})
```

### 路由管理

- 前端控制，由路由源数据中的 `roles` 控制，只保留二级菜单，菜单由路由源数据中的 `hidden` 控制
- 缓存路由只根据菜单 name 不检查 `id` 之类的标志，不缓存 keep-alive 为 false 的，默认为 true

```js
const meta = {
  hidden: true, // 菜单是否隐藏
  icon: '图标',
  title: '标题',
  keepAlive: true, // 是否缓存页面
  target: 'blank', // 跳转方式
  roles: ['admin'],
}
```

### 待办事项

- [ ] 历史记录
- [ ] vue3.5 学习使用
- [ ] 第三方类型声明的导入与使用时机
- [ ] 模式及主题切换，黑夜白天
- [ ] apiFox 入门使用
- 权限菜单设计方案，RBAC 前端控制方案
- 组件，功能，表格，表单，低代码，流程图
- 先完成基本的工具，前端权限，基本页面结构后再进行后续开发，主要做学习用途，逐步优化

### 参考资料

- [源码参考](https://github.com/arco-design/arco-design-pro-vue)
- [参考网站](https://pure-admin-thin.netlify.app/#/login)

### 实战笔记

- ref 与 reactive 区别与实战指南，推荐首选 ref，[官方文档](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state-1)
- 在 Vite 项目中，import.meta.env 是用于在客户端代码中访问环境变量的方式，但它在 vite.config.ts 文件中无法直接使用。这是因为 vite.config.ts 是在构建过程中运行的，而 import.meta.env 是在客户端环境中才可用。

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
```

### 待办事项

- [ ] 历史记录
- [ ] 第三方类型声明的导入与使用时机
- [ ] 模式切换，黑夜白天
- [ ] apiFox 入门使用
- 权限菜单设计方案，RBAC 前端控制方案
- 组件，功能，表格，表单，低代码，流程图

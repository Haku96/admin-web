### 最佳实践

- 利用 VS Code 快速生成模板，参考文件 `.vscode/vue.code-snippets`,[辅助工具](https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode)
- .etc

## 使用教程

```ts
/// vite.config.ts，使用直接脚本部分调用 `__APP_VERSION__`
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version)
  }
});

/// router/index.ts import.meta.glob 批量查找
```

- [vue-pure-admin](https://pure-admin.cn)
- [pure-admin/utils](https://pure-admin-utils.netlify.app)

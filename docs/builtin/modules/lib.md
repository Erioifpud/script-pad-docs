# Lib
远程代码加载相关的操作。

## load
加载远程代码或者 npm 包，参数 `name` 可以是代码地址或者 npm 包名，也可以带有 `@` 指定版本号，比如 `vue@3`。

加载的是 **UMD** 模块的导出，会挂载到 `iframe` 的 `window` 上，返回值是模块挂载后的名称列表。

```typescript
static async load(name: string): Promise<string[]>
```

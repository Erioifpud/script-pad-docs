# Template
使用低代码编辑器创建的模板的相关的操作。

## showRaw
引用低代码模板，渲染组件到试验场中，`id` 为模板 id，`propsData` 为渲染时传入的组件属性。

```typescript
static async showRaw(id: string, propsData: Record<string, any>): Promise<void>
```

---

## show
引用低代码模板，渲染组件到试验场中，`id` 为模板 id，`propsData` 为渲染时传入的组件属性，`wrapperStyle` 为 `iframe` 容器的样式。

渲染结果会通过 `iframe` 包裹，支持截图等功能，参考 `App.showComponent`。

```typescript
static async show(id: string, propsData: Record<string, any>, wrapperStyle?: CSSProperties): Promise<void>
```

---

## use
引用低代码模板，传入数据，获取组件的构造函数，通常用在脚本的 jsx 中，`id` 为模板 id，`propsData` 为渲染时传入的组件属性。

```typescript
static async use(id: string, propsData: Record<string, any>): Promise<React.ReactElement<any, string | React.JSXElementConstructor<any>> | null>
```

# Template
使用低代码编辑器创建的模板的相关的操作。

## showRaw
引用低代码模板，渲染组件到试验场中，`id` 为模板 id，`propsData` 为渲染时传入的组件属性。

```typescript
static showRaw(id: string, propsData: Record<string, any>): void
```

---

## show
引用低代码模板，渲染组件到试验场中，`id` 为模板 id，`propsData` 为渲染时传入的组件属性，`wrapperStyle` 为 `iframe` 容器的样式。

渲染结果会通过 `iframe` 包裹，支持截图等功能，参考 `App.showComponent`。

```typescript
static show(id: string, propsData: Record<string, any>, wrapperStyle?: CSSProperties): void
```

---

## use
引用低代码模板，传入数据，获取组件的构造函数，通常用在脚本的 jsx 中，`id` 为模板 id，`propsData` 为渲染时传入的组件属性。

```typescript
static use(id: string, propsData: Record<string, any>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
```

---

## renderToString
渲染模板为字符串，`id` 为模板 id，`propsData` 为渲染时传入的组件属性。

```typescript
static renderToString(id: string, propsData: Record<string, any>): string
```

---

## renderToImage
渲染模板为图片，`id` 为模板 id，`propsData` 为渲染时传入的组件属性，`options` 为截图配置，返回图片的 base64 编码数据。

```typescript
static async renderToImage(id: string, propsData: Record<string, any>, options: { width: number, height: number, scale: number }): Promise<string>
```

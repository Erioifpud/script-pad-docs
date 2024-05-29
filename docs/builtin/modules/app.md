# App
程序本身的相关操作，比如显示 loading、显示组件等。

## showText
显示文本。

```typescript
static async showText(text: string): Promise<void>
```

---

## showComponent
显示组件，`style` 是组件样式，以文本形式传入，`wrapperStyle` 是 `iframe` 的样式，这些组件都会被 `iframe` 包裹以实现样式隔离。

```typescript
static async showComponent(node: ReactNode, style: string, wrapperStyle?: CSSProperties): Promise<void>
```

---

## showRawComponent
显示组件，组件没有 `iframe` 包裹，样式需要通过内联方式设置。

```typescript
static async showRawComponent(node: ReactNode): Promise<void>
```

---

## start
标记脚本开始运行（用不用都行），会将程序左上角的 loading 显示。

```typescript
static async start(): Promise<void>
```

---

## done
标记脚本运行结束，会将程序左上角的 loading 隐藏。

```typescript
static async done(): Promise<void>
```

# App
程序本身的相关操作，比如显示 loading、显示组件等。

## showText
显示文本。

```typescript
static showText(text: string): void
```

---

## showComponent
显示组件，`style` 是组件样式，以文本形式传入，`wrapperStyle` 是 `iframe` 的样式，这些组件都会被 `iframe` 包裹以实现样式隔离。

```typescript
static showComponent(node: ReactNode, style: string, wrapperStyle?: CSSProperties): void
```

---

## showRawComponent
显示组件，组件没有 `iframe` 包裹，样式需要通过内联方式设置。

```typescript
static showRawComponent(node: ReactNode): void
```

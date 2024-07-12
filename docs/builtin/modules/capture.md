# Capture
获取快照相关的操作。

## zipFlat
对 HTMl 元素进行截图，`el` 为 HTML 元素。

返回截图图像的 Base64 字符串。

```typescript
static async screenshotElement(el: HTMLElement): Promise<string>
```

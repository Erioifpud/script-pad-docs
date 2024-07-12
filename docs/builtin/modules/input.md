# Input
输入弹窗相关的操作。

## 接口描述
```typescript
interface BaseNode<T> {
  id: string
  value: T
  placeholder: string
}

interface TextNode extends BaseNode<string> {
  type: 'text'
}

interface AreaNode extends BaseNode<string> {
  type: 'area'
}

interface SelectOption {
  label: string
  value: string
}

interface SelectNode extends BaseNode<string> {
  type: 'select'
  options: SelectOption[]
}

interface SliderNode extends BaseNode<number> {
  type: 'slider'
  min: number
  max: number
  step: number
}

interface ColorNode extends BaseNode<string> {
  type: 'color'
}

// 预设颜色表
interface ColorMapNode extends BaseNode<string> {
  type: 'colorMap'
}

export type Node = TextNode | AreaNode | SelectNode | SliderNode | ColorNode | ColorMapNode;
```

## create
创建获取用户输入的弹窗，根据自定义参数生成表单，用户填写完成后返回**答案构成的对象**。

目前没有 `required` 属性，所以需要自己写校验。

```typescript
static async create(template: Node[]): Promise<unknown>
```
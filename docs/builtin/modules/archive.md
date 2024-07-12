# Archive
创建归档文件相关的操作。

## 接口描述
```typescript
interface FlatItem {
  name: string
  data: string
  // 文件数据的类型
  type: 'base64' | 'text'
}
```

## zipFlat
将一系列的数据以文件形式打包成 zip 归档，`items` 用于描述文件信息与内容。

返回 zip 归档的字节数据。

```typescript
static async zipFlat(items: FlatItem[]): Promise<Uint8Array>
```

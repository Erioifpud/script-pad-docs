# Misc
一些杂项操作，相当于 utils。

## retry
用于对 `Promise` 任务进行重试，`times` 为重试次数，`delay` 为每次重试的间隔时间。

```typescript
static async retry<T>(task: Promise<T>, times: number, delay: number): Promise<T>
```

---

## sleep
等待一段时间，`ms` 为毫秒。

```typescript
static async sleep(ms: number): Promise<void>
```

---

## saveAs
打开弹窗选择路径，保存字节数据到本地文件，`binaryData` 为数据内容，`title` 为弹窗标题。

文件类型不限，扩展名需要自己填写。

```typescript
static async saveAs(binaryData: Uint8Array, title = 'download'): Promise<boolean>
```

---

## saveAsZip
打开弹窗选择路径，保存字节数据到本地文件，`binaryData` 为数据内容，`title` 为弹窗标题。

文件类型为 `.zip`，会自动补充。

```typescript
static async saveAsZip(binaryData: Uint8Array, title = 'download'): Promise<boolean>
```

---

## toBase64
将字符串转换为 Base64 编码，`str` 为字符串内容。

```typescript
static async toBase64(str: string): Promise<string>
```

---

## fromBase64
将 Base64 编码转换为字符串，`b64` 为 Base64 编码内容。

```typescript
static async fromBase64(b64: string): Promise<string>
```

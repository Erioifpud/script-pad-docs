# Clipboard
剪切板相关的操作。

## readImageBase64
读取剪切板中的图片，返回图片的 base64 编码。

```typescript
static async readImageBase64(): Promise<string>;
```

---

## readImageBytes
读取剪切板中的图片，返回图片的二进制数据。

```typescript
static async readImageBytes(): Promise<Uint8Array>;
```

---

## writeImage
将图片写入剪切板，参数 `data` 可以是 base64 或者二进制数据。

```typescript
static async writeImage(data: number[] | string): Promise<void>;
```

---

## readHTML
读取剪切板中的 HTML。

```typescript
static async readHTML(): Promise<string>;
```

---

## readPlain
读取剪切板中的纯文本。

```typescript
static async readPlain(): Promise<string>;
```

---

## readRichText
读取剪切板中的富文本。

```typescript
static async readRichText(): Promise<string>;
```

---

## writeText
将文本写入剪切板。

```typescript
static async writeText(data: string): Promise<void>;
```

---

## writeRichText
将富文本写入剪切板。

```typescript
static async writeRichText(data: string): Promise<void>;
```

---

## readFiles
读取剪切板中的文件路径。

```typescript
static async readFiles(): Promise<string[]>;
```

---

## readFileUrls
读取剪切板中的文件路径，在 Windows 下和 `readFiles` 没区别，其他环境下会带有 `file://` 前缀。

```typescript
static async readFileUrls(): Promise<string[]>;
```

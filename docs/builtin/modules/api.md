# API
Rust 后端服务的包装函数。

具体的响应数据可以参考 [接口](/script-pad-docs/apis/)。

## 接口定义
```typescript
interface ServerInfo {
  host: string
  port: number
}

interface Args {
  http_addr: string
  http_port: number
}

interface ResponseWrapper<T> {
  success: boolean
  message: string
  data: T
}
```

## getServerInfo
获取本地 Rust 后端服务的信息，包括监听的地址和端口。

```typescript
static async getServerInfo(): Promise<ServerInfo>
```

---

## uploadImage
上传 base64 图片数据到服务器，返回一个临时 ID 用于查询图片。

```typescript
static async uploadImage(base64: string, mimeType = 'image/png'): Promise<ResponseWrapper<string> | Response>
```

---

## getImage
传入临时图片 ID 进行查询，返回图片字节数据。

```typescript
static async getImage(id: string): Promise<string>
```

---

## imageCors
传入图片 URL 进行跨域请求，返回图片字节数据（常用于一些无法通过 HTTP 模块避免跨域的场景）。

```typescript
static async imageCors(imgUrl: string): Promise<string>
```

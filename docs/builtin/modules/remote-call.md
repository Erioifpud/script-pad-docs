# RemoteCall
远程调用相关的操作。

目前只实现了本地调用（手动运行脚本）和 HTTP 远程调用。

## 接口描述
```typescript
enum Mode {
  // 本地调用
  LOCAL = 0,
  // HTTP 请求调用
  HTTP = 1
}
```

## getMode
获取当前的调用模式。

```typescript
static getMode(): Mode
```

---

## getBody
获取本次调用的请求体。

```typescript
static async getBody(): Promise<any>
```

---

### toResponse
脚本执行后需要返回的数据。

```typescript
static async toResponse(data: any): Promise<void>
```

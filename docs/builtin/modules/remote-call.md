# RemoteCall
远程调用相关的操作。

目前只实现了本地调用（手动运行脚本）和 HTTP 远程调用。

## 例子
```typescript
// 这是一个使用了 RemoteCall 模块的脚本

// 判断当前调用模式，仅在接口调用脚本时运行
const mode = await RemoteCall.getMode()
if (mode === 0) {
  return
}

// 获得请求体中的 text 数据
const body = await RemoteCall.getBody()
const text = body.text

// 语音播报内容
TTS.speak(text)

// 返回响应，让请求正常结束
await RemoteCall.toResponse({
  message: '播报完成'
})
```

```bash
# 调用脚本
# 点击脚本的标题栏复制脚本 ID，填入请求体的 id 字段
# 请求体中的 data 字段为传入脚本的参数，这个的类型是一个 JSON 对象，具体取决于脚本应该接收的参数
curl --location 'localhost:56789/api/run' \
--header 'Content-Type: application/json' \
--data '{
    "id": "00000000-0000-0000-0000-000000000000",
    "data": {
        "hello": "world"
    }
}'
```

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

# AI
AI 相关的操作，比如使用通义千问模型进行问答。

## 接口定义
```typescript
interface CommonMessage {
  role: string
  content: string
}

type Message = CommonMessage

interface Choice {
  message: Message
  finish_reason: string
}

interface QwenOptions {
  model: string
  input: {
    prompt?: string
    messages?: Message[]
  }
  parameters?: {
    result_format?: string
    seed?: number
    max_tokens?: number
    top_p?: number
    top_k?: number
    repetition_penalty?: number
    temperature?: number
    stop?: string | string[]
    enable_search?: boolean
    incremental_output?: boolean
  }
}

interface QwenResponse {
  output: {
    text: string
    finish_reason: string
    choices: Choice[]
  }
  usage: {
    output_tokens: number
    input_tokens: number
    total_tokens: number
  }
  request_id: string
}

interface QwenChatRawOptions {
  model: string
  messages: Message[]
  key: string
}

interface QwenChatOptions {
  model: string
  question: string
  key: string
}
```

## qwenChatRaw
通过千问 HTTP 接口进行问答，不对结果进行预处理，返回**原始响应**。

```typescript
static async qwenChatRaw(options: QwenChatRawOptions): Promise<QwenResponse>
```

---

## qwenChatSimple
通过千问 HTTP 接口进行问答，主要参数是 question 字符串，返回的是**字符串形式的答案**。

```typescript
static async qwenChatSimple(options: QwenChatOptions): Promise<string>
```

---

## qwenChat
通过千问 HTTP 接口进行问答，主要参数 messages 数组，用于定义聊天上下文，返回是**字符串形式的答案**。

```typescript
static async qwenChat(options: QwenChatRawOptions): Promise<string>
```

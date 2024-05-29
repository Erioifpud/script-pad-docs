# Request
HTTP 请求相关的操作，由后端的 Rust 发起，所以不存在跨域问题，但同时也无法在 Devtools 中 debug。

## raw
原始的请求函数，需要自己填写所有参数。

```typescript
enum ResponseType {
    JSON = 1,
    Text = 2,
    Binary = 3
}

interface FetchOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';
    headers?: Record<string, any>;
    query?: Record<string, any>;
    body?: Body;
    timeout?: number;
    responseType?: ResponseType;
}

static async raw(url: string, options: FetchOptions): Promise<Response<unknown>>
```

---

## get
发起 get 请求。

```typescript
static async get(url: string, options: Omit<FetchOptions, 'method' | 'responseType'>): Promise<Response<unknown>>
```

---

## post
发起 post 请求。

```typescript
static async post(url: string, options: Omit<FetchOptions, 'method' | 'responseType'>): Promise<Response<unknown>>
```

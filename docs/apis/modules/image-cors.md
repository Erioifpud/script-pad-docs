# 图片跨域
内置的 HTTP 模块是 Tauri 请求的包装，所以可以跨域进行请求，不受浏览器限制。

这个接口用于一些需要跨域访问图片，但又无法使用 HTTP 模块解决的场景。

## 跨域访问图片数据
访问需要跨域访问的图片。

### 请求

- Method: `GET`
- Content Type: `application/json`
- URL: `/api/image_cors`

### URL Query 参数

| 字段 | 类型 | 必填 | 描述 |
| -------- | ---- | -------- | ----------- |
| ``url`` | string | true | 需要访问的图片地址 |

### 示例
```bash
curl --location 'localhost:56789/api/image_cors?url=https://www.httpbin.org/image' \
'
```

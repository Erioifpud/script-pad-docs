# 图片暂存
能通过一个接口将 Base64 编码的图片解码后暂存，通过第二个接口获取图片。

用于处理只能拿到图片 Base64，但使用时需要提供图片地址的场景。

## 上传图片
上传图片进行保存的接口，要注意目前图片只会留存 120 秒。

之后可能会加入调整过期时间的参数。

### 请求

- Method: `POST`
- Content Type: `application/json`
- URL: `/api/upload_image`

### 参数

| 字段 | 类型 | 必填 | 描述 |
| -------- | ---- | -------- | ----------- |
| ``base64`` | string | true | 图片数据（`data` 头信息可有可无） |
| ``mime_type`` | string | false | 图片 MIME 类型（默认 `image/png`） |

### 响应

| 字段 | 类型 | 描述 |
| -------- | ---- | ----------- |
| ``success`` | boolean | 是否成功 |
| ``message`` | string | 错误信息 |
| ``data`` | string | 临时图片 id |

### 示例
```bash
curl --location 'localhost:56789/api/upload_image' \
--header 'Content-Type: application/json' \
--data '{
    "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABvSURBVChTYxAUFPyPjv39/f+XlZX9V1RUhPOrq6v/YygGKQAptLGxgYtJSkr+z87OxlQMUgQyRV9fH0U8MTERUzG6E5DF6aiYJDeDFIEUExUaIAwyBT2cQXysikEYpKGhoQGMYRpxKsaGaaVY8D8A62DM8fYR+7EAAAAASUVORK5CYII=",
    "mime_type": "image/png"
}'
```

## 访问图片
通过上传图片后得到的临时 id 访问图片。

响应的 `Content-Type`` 为图片的 MIME 类型。

### 请求

- Method: `GET`
- Content Type: `application/json`
- URL: `/api/get_image/{id}`

### 参数

| 字段 | 类型 | 必填 | 描述 |
| -------- | ---- | -------- | ----------- |
| ``id`` | string | true | 临时图片 id |

### 示例
```bash
curl --location 'localhost:56789/api/get_image/0a7a384b-d77a-496a-af3c-c8e7aae04d16'
```

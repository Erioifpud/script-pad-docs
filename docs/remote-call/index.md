# 远程调用
顾名思义，就是通过外部方式去执行脚本，再让脚本返回数据作为响应。

目前只有 HTTP 这一种远程调用方式。

## HTTP

### 调用脚本
#### 例子
请参考 [RemoteCall 模块](/script-pad-docs/builtin/modules/remote-call) 中的例子。

#### 请求

- Method: `POST`
- Content Type: `application/json`
- URL: `/api/run`

#### 参数

| 字段 | 类型 | 必填 | 描述 |
| -------- | ---- | -------- | ----------- |
| ``id`` | string | true | 脚本 id |
| ``data`` | any | true | 传入脚本的参数 |

#### 示例
```bash
curl --location 'localhost:56789/api/run' \
--header 'Content-Type: application/json' \
--data '{
    "id": "00000000-0000-0000-0000-000000000000",
    "data": {
        "hello": "world"
    }
}'
```

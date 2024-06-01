# Notice
系统提醒相关的操作。

由于 tauri/app 系统提醒 API 较弱，所以只能实现图标、标题、内容的修改，无法设置事件。

~~因为 Notification 是浏览器内置 API，所以把该模块名字换成了 Notice~~

## send
弹出系统提醒，如果没有权限就不会生效，注意开通系统提醒权限。

其中标题 `title` 是必须的，内容 `description` 可选。

```typescript
static async send(title: string, body: string = ''): Promise<void>
```

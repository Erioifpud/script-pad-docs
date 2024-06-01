# Misc
一些杂项操作，相当于 utils。

## retry
用于对 `Promise` 任务进行重试，`times` 为重试次数，`delay` 为每次重试的间隔时间。

```typescript
static async retry<T>(task: Promise<T>, times: number, delay: number)
```

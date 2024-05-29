# TTS
语音合成的相关操作，目前是通过调用系统本身的 API 实现的。

## speak
文字转语音并播放。

```typescript
static async speak(text: string): Promise<void>
```

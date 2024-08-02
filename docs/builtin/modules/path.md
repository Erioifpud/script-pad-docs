# Path
一些路径相关的操作。

都是 `@tauri-apps/api` 中的功能，只做了少许重命名。

## getAppDir
获取应用程序目录，返回目录路径。

```typescript
static async getAppDir(): Promise<string>
```

---

## join
使用平台特定的分隔符将所有给定 path 段连接在一起，然后规范化结果路径。

```typescript
static async join(...paths: string[]): Promise<string>
```

---

## resolve
将一系列 paths 或path段解析为绝对路径。

```typescript
static async resolve(...paths: string[]): Promise<string>
```

---

## extname
获取 path 的扩展名。

```typescript
static async extname(path: string): Promise<string>
```

---

## dirname
获取 path 的目录名，尾随目录的分隔符将被忽略。

```typescript
static async dirname(path: string): Promise<string>
```

---

## delimiter
获取平台特定的路径 delimiter。

```typescript
static async delimiter(): Promise<string>
```

---

## sep
获取平台特定的路径 separator。

```typescript
static async sep(): Promise<string>
```

---

## isAbsolute
返回路径是否是绝对路径。

```typescript
static async isAbsolute(): Promise<boolean>
```

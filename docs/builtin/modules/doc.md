# Doc
记事本功能相关的操作。

## 接口描述
```typescript
interface WriteOptions {
  mode: 'override' | 'append';
}
```

## read
读取指定记事本的内容，`id` 为记事本 id。

记事本 id 可以选中记事本后，点击标题进行复制。

```typescript
static read(id: string): string
```

---

## readByLines
读取指定记事本的内容，按多行为一组读取，`id` 为记事本 id，`lines` 为作为一个分组的行数。

`lines` 为 1 时只会返回**空数组**。

```typescript
static readByLines(id: string, lines: number): string[][]
```

---

## write
覆盖或追加内容到指定记事本，`id` 为记事本 id，`content` 为要写入的内容，`options` 为写入选项，默认**覆盖**。

```typescript
static write(id: string, content: string, options: WriteOptions = { mode: 'override' }): string | undefined
```

---

## updateTitle
更新记事本标题，`id` 为记事本 id，`title` 为新标题内容。

```typescript
static updateTitle(id: string, title: string): void
```

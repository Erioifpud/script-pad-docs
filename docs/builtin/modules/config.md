# Config
当前脚本相关的配置，**在编辑器界面的右上角进行设置**，这些配置在脚本中**只能读取，不能修改**。

## get
根据 key 获取对应的配置。

```typescript
static get(key: string): any
```

---

## keys
获取所有配置的 key。

```typescript
static keys(): string[]
```

---

## values
获取所有配置的值。

```typescript
static values(): any[]
```

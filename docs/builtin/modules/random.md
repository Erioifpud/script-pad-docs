# Random
随机相关的操作。

## integer
生成随机整数，`min` 为最小值，`max` 为最大值（包括）。

```typescript
static async integer(min: number, max: number): Promise<number>
```

---

## float
生成随机浮点数，`min` 为最小值，`max` 为最大值（包括）。

```typescript
static async float(min: number, max: number): Promise<number>
```

---

## boolean
生成随机布尔值。

```typescript
static async boolean(): Promise<boolean>
```

---

## string
生成随机字符串，`length` 为字符串长度，`chars` 为可选的字符集。

```typescript
static async string(length: number, chars?: string): Promise<string>
```

---

## shuffle
对数组随机打乱，并返回新数组，`array` 为需要打乱的数组。

```typescript
static async shuffle<T>(array: T[]): Promise<T[]>
```

---

## seed
使用种子创建随机器，`seed` 为种子。

```typescript
static async seed(seed: string): Promise<seedrandom.PRNG>
```


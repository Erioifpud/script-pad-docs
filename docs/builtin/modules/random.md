# Random
随机相关的操作。

## integer
生成随机整数，`min` 为最小值，`max` 为最大值（包括）。

```typescript
static integer(min: number, max: number): number
```

---

## float
生成随机浮点数，`min` 为最小值，`max` 为最大值（包括）。

```typescript
static float(min: number, max: number): number
```

---

## boolean
生成随机布尔值。

```typescript
static boolean(): boolean
```

---

## string
生成随机字符串，`length` 为字符串长度，`chars` 为可选的字符集。

```typescript
static string(length: number, chars?: string): string
```

---

## shuffle
对数组随机打乱，并返回新数组，`array` 为需要打乱的数组。

```typescript
static shuffle<T>(array: T[]): T[]
```

---

## seed
使用种子创建随机器，`seed` 为种子。

```typescript
static seed(seed: string): seedrandom.PRNG
```


# Time
时间格式、运算相关的操作。

## format
对时间数据进行格式化，`date` 为需要格式化的时间，`formatStr` 为格式化字符串，参考 `date-fns`。

```typescript
static async format(date: Date | number, formatStr: string): Promise<string>
```

---

## parse
将时间字符串解析成时间对象，`dateStr` 为时间字符串，`formatStr` 为格式化字符串，`referenceDate` 为对 `dateStr` 遗漏信息的补全，参考 `date-fns`。

```typescript
static async parse(dateStr: string, formatStr: string, referenceDate: string | number | Date): Promise<Date>
```

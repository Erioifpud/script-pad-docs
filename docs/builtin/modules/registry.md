# Registry
注册表相关操作，只有读，没有写。

`value` 所有类型的数据都会以字符串形式返回，`valueType` 用于区分数据类型，不过有所简化，会出现的值有 `string`、`dword`、`qword`、`binary`，其中 `binary` 的数据会以逗号分隔。

## 接口描述
```typescript
type HKeyType = 'ClassesRoot' | 'CurrentUser' | 'LocalMachine' | 'Users' | 'PerformanceData' | 'PerformanceText' | 'PerformanceNLSText' | 'CurrentConfig' | 'DynData' | 'CurrentUserLocalSettings';

interface RegValue {
  success: boolean;
  reason: string;
  value: string;
  valueType: string;
  lastWriteTime: string;
}

interface RegKeys {
  success: boolean;
  reason: string;
  keys: string[];
}

interface RegItem {
  name: string;
  value: string;
  valueType: string;
}

interface RegItems {
  success: boolean;
  reason: string;
  items: RegItem[];
}
```

## getValue
获取注册表中的值，`hkey` 为注册表路径，`path` 为注册表项路径，`name` 为注册表项名称。

```typescript
static async getValue(hkey: HKeyType, path: string, name: string): Promise<RegValue>;
```

---

## getKeys
获取注册表中的所有子项的名称，`hkey` 为注册表路径，`path` 为注册表项路径。

```typescript
static async getKeys(hkey: HKeyType, path: string): Promise<RegKeys>;
```

---

## getValues
获取注册表中的所有子项的值，`hkey` 为注册表路径，`path` 为注册表项路径。

```typescript
static async getValues(hkey: HKeyType, path: string): Promise<RegItems>;
```

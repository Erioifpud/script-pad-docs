# FileManager
FileManager 包含了文件操作相关 API，例如创建文件、读取文件、写入文件等。

## readFiles
读取多个文件，返回文件路径。

如果要读取文件内容，请配合 `readAsString` 等方法使用。

```typescript
interface OpenDialogOptions {
  /** The title of the dialog window. */
  title?: string;
  /** The filters of the dialog. */
  filters?: DialogFilter[];
  /** Initial directory or file path. */
  defaultPath?: string;
  /** Whether the dialog allows multiple selection or not. */
  multiple?: boolean;
  /** Whether the dialog is a directory selection or not. */
  directory?: boolean;
  /**
   * If `directory` is true, indicates that it will be read recursively later.
   * Defines whether subdirectories will be allowed on the scope or not.
   */
  recursive?: boolean;
}

static async readFiles(options: Omit<OpenDialogOptions, 'directory' | 'defaultPath' | 'recursive' | 'multiple'>): Promise<string[] | null>
```

---

## readDirs
读取多个文件夹，返回文件夹路径。

```typescript
// OpenDialogOptions 参考 readFiles
static async readDirs(options: Omit<OpenDialogOptions, 'directory' | 'defaultPath' | 'multiple'>): Promise<string[] | null>
```

---

## readAsString
按文本读取文件内容，返回字符串。

```typescript
static async readAsString(filePath: string): Promise<string>
```

---

## readAsBuffer
按二进制读取文件内容，返回 `Uint8Array`。

```typescript
static async readAsBuffer(filePath: string): Promise<Uint8Array>
```

---

## writeAsString
按文本写入文件内容。

```typescript
static async writeAsString(filePath: string, content: string, append?: boolean): Promise<void>
```

---

## writeAsBuffer
按二进制写入文件内容。

```typescript
static async writeAsBuffer(filePath: string, content: Uint8Array, append?: boolean): Promise<void>
```

---

## deleteFile
删除文件。

```typescript
static async deleteFile(filePath: string): Promise<void>
```

---

## deleteDir
删除文件夹。

```typescript
static async deleteDir(dirPath: string): Promise<void>
```

---

## moveFile
移动文件。

```typescript
static async moveFile(srcPath: string, destPath: string): Promise<void>
```

---

## renameFile
重命名文件。

```typescript
static async renameFile(srcPath: string, destPath: string): Promise<void>
```

---

## exists
判断文件是否存在。

```typescript
static async exists(filePath: string): Promise<boolean>
```

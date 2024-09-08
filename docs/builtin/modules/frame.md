# Frame
Webview 窗口相关的操作。

## 接口描述
```typescript
interface WindowOptions {
  label: string;
  url: string;
  userAgent?: string;
  fileDropEnabled?: boolean;
  center?: boolean;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  resizable?: boolean;
  maximizable?: boolean;
  minimizable?: boolean;
  closable?: boolean;
  title?: string;
  fullscreen?: boolean;
  focused?: boolean;
  transparent?: boolean;
  maximized?: boolean;
  visible?: boolean;
  decorations?: boolean;
  alwaysOnTop?: boolean;
  contentProtected?: boolean;
  skipTaskbar?: boolean;
  theme?: 'Light' | 'Dark';
  titleBarStyle?: 'Visible' | 'Transparent' | 'Overlay';
  hiddenTitle?: boolean;
  acceptFirstMouse?: boolean;
  tabbingIdentifier?: string;
  additionalBroswerArgs?: string;
}
```

## createWindow
创建 Webview 窗口，参考 Tauri 文档，返回窗口的 `label`。

```typescript
static async createWindow(options: WindowOptions, reusable = false): Promise<string>
```

---

## closeWindow
通过窗口的 `label` 关闭窗口。

```typescript
static async closeWindow(label: string): Promise<void>
```

# requestAnimationFrame

提供跨浏览器兼容的 `requestAnimationFrame` 函数，并使用 `setTimeout` 作为回退选项。

### 使用

```ts
import { requestAnimationFrame } from '@kale/kit'

requestAnimationFrame(() => {
  console.log('请求了一帧')
})
```

### 参数

| 参数 | 类型          | 默认值 |
| ---- | ------------- | ------ |
| `el` | `HTMLElement` |        |

### 返回值

| 类型                           |
| ------------------------------ |
| `Array<HTMLElement \| Window>` |

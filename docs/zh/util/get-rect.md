# getRect

获取元素或窗口的尺寸和位置，返回一个 `DOMRect` 对象。

### 使用

```ts
import { getRect } from '@kale/kit'

const rect = getRect(document.querySelector('div'))
```

### 参数

| 参数      | 类型      | 默认值 |
| --------- | --------- | ------ |
| `element` | `Element` |        |

### 返回值

| 类型      |
| --------- |
| `DOMRect` |

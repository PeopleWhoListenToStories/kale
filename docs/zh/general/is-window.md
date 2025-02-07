# isWindow

判断输入值是否是全局 `window` 对象

### 使用

```ts
import { isWindow } from '@kale/kit'

isWindow(window) // return true
isWindow({}) // return false
```

### 参数

| 参数    | 类型  | 默认值 |
| ------- | :---: | -----: |
| `value` | `any` |        |

### 返回值

|   类型    |
| :-------: |
| `boolean` |

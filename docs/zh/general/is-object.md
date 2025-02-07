# isObject

判断输入值是否是 `对象`（不包括 `null`）。

### 使用

```ts
import { isObject } from '@kale/kit'

isObject({}) // return true
isObject([]) // return true
isObject(null) // return false
```

### 参数

| 参数    | 类型  | 默认值 |
| ------- | :---: | -----: |
| `value` | `any` |        |

### 返回值

|   类型    |
| :-------: |
| `boolean` |

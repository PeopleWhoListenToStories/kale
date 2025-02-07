# isNumeric

判断输入值是否是 `数字` 或 `数字字符串`。

### 使用

```ts
import { isNumeric } from '@kale/kit'

isNumeric(123) // return true
isNumeric('456') // return true
isNumeric('@kale/kit') // return false
```

### 参数

| 参数    | 类型  | 默认值 |
| ------- | :---: | -----: |
| `value` | `any` |        |

### 返回值

|   类型    |
| :-------: |
| `boolean` |

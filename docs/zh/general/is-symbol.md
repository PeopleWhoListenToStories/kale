# isSymbol

判断输入值是否是 `符号`。

### 使用

```ts
import { isSymbol } from '@kale/kit'

isSymbol(Symbol('test')) // return true
isSymbol('@kale/kit') // return false
```

### 参数

| 参数    | 类型  | 默认值 |
| ------- | :---: | -----: |
| `value` | `any` |        |

### 返回值

|   类型    |
| :-------: |
| `boolean` |

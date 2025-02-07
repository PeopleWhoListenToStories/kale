# isError

判断输入值是否为 `Error` 对象。

### 使用

```ts
import { isError } from '@kale/kit'

isError(new Error('message')) // return true
```

### 参数

| 参数  | 类型  | 默认值 |
| ----- | :---: | -----: |
| `val` | `any` |        |

### 返回值

|   类型    |
| :-------: |
| `boolean` |

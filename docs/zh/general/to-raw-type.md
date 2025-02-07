# toRawType

返回输入值的 `原始类型`。

### 使用

```ts
import { toRawType } from '@kale/kit'

toRawType({}) // return 'Object'
toRawType([]) // return 'Array'
```

### 参数

| 参数    | 类型  | 默认值 |
| ------- | :---: | -----: |
| `value` | `any` |        |

### 返回值

|   类型   |
| :------: |
| `string` |

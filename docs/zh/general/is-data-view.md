# isDataView

判断输入值是否是 `DataView`。

### 使用

```ts
import { isDataView } from '@kale/kit'

isDataView(new DataView(new ArrayBuffer(1))) // return true
```

### 参数

| 参数    | 类型  | 默认值 |
| ------- | :---: | -----: |
| `value` | `any` |        |

### 返回值

|   类型    |
| :-------: |
| `boolean` |

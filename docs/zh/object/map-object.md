# mapObject

将传入的对象映射成一个新的对象。

### 使用

```ts
import { mapObject } from '@kale/kit'

mapObject({ a: 1, b: 2 }, (key, value) => [key, value * 2])
// return { a: 2, b: 4 }
mapObject({ a: 1, b: 2 }, (key, value) => [`${key}${value}`, value])
// return { a1: 1, b2: 2 }
mapObject({ a: 1, b: 2 }, (key, value) => (value === 1 ? [key, value] : undefined))
// return { a: 1 }
```

### 参数

| 参数     | 类型                                                                  | 默认值 |
| -------- | --------------------------------------------------------------------- | ------ |
| `object` | `object`                                                              |        |
| `fn`     | `(key: string, value: any) => [key: string, value: any] \| undefined` |        |

### 返回值

| 类型     |
| -------- |
| `object` |

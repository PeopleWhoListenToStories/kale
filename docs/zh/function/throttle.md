# throttle

创建一个节流函数，该函数每 `delay` 毫秒最多只调用一次 `fn`。

### 使用

```ts
import { throttle } from '@kale/kit'

const throttledFn = throttle(() => {
  // do something, it will be called at most 1 time per second
}, 1000)

window.addEventListener('resize', throttledFn)
```

### 参数

| 参数    |    类型    | 默认值 |
| ------- | :--------: | -----: |
| `fn`    | `Function` |        |
| `delay` |  `number`  |  `200` |

### 返回值

|    类型    |
| :--------: |
| `Function` |

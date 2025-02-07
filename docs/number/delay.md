# delay

Create a promise that resolves after a specified time in milliseconds.

### Usage

```ts
import { delay } from '@kale/kit'

console.log('Start')
await delay(1000)
console.log('End after 1 second')
```

### Arguments

| Arg         |   Type   | Defaults |
| ----------- | :------: | -------: |
| `time (ms)` | `number` |          |

### Return

|      Type       |
| :-------------: |
| `Promise<void>` |

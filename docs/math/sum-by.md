# sumBy

Calculates the sum of values in an `array` based on a provided function.

### Usage

```ts
import { sumBy } from '@kale/kit'

sumBy([{ n: 1 }, { n: 2 }, { n: 3 }], ({ n }) => n) // return 6
```

### Arguments

| Arg   | Type                   | Defaults |
| ----- | ---------------------- | -------- |
| `arr` | `Array`                |          |
| `fn`  | `(val: any) => number` |          |

### Return

| Type     |
| -------- |
| `number` |

# at

Retrieves the element at a specified index in an `array`, supporting negative indices.

### Usage

```ts
import { at } from '@kale/kit'

at([1, 2, 3], 0) // return 1
at([1, 2, 3], -1) // return 3
```

### Arguments

| Arg     | Type     | Defaults |
| ------- | -------- | -------- |
| `arr`   | `Array`  |          |
| `index` | `number` |          |

### Return

| Type  |
| ----- |
| `any` |

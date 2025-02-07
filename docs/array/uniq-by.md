# uniqBy

Creates a duplicate-free version of an `array`, using a custom comparison function to determine uniqueness.

### Usage

```ts
import { uniqBy } from '@kale/kit'

uniqBy([{ id: 1 }, { id: 2 }, { id: 1 }], (a, b) => a.id === b.id)
// return [{ id: 1 }, { id: 2 }]
```

### Arguments

| Arg   | Type                      | Defaults |
| ----- | ------------------------- | -------- |
| `arr` | `Array`                   |          |
| `fn`  | `(a: any, b: any) => any` |          |

### Return

| Type    |
| ------- |
| `Array` |

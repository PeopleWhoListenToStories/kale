# isWindow

Determine whether the input value is the global `window` object.

### Usage

```ts
import { isWindow } from '@kale/kit'

isWindow(window) // return true
isWindow({}) // return false
```

### Arguments

| Arg     | Type  | Defaults |
| ------- | :---: | -------: |
| `value` | `any` |          |

### Return

|   Type    |
| :-------: |
| `boolean` |

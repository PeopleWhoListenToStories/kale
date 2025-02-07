# isNumeric

Determine whether the input value is a `number` or a `numeric string`.

### Usage

```ts
import { isNumeric } from '@kale/kit'

isNumeric(123) // return true
isNumeric('456') // return true
isNumeric('@kale/kit') // return false
```

### Arguments

| Arg     | Type  | Defaults |
| ------- | :---: | -------: |
| `value` | `any` |          |

### Return

|   Type    |
| :-------: |
| `boolean` |

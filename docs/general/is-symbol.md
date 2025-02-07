# isSymbol

Determine whether the input value is a `symbol`.

### Usage

```ts
import { isSymbol } from '@kale/kit'

isSymbol(Symbol('test')) // return true
isSymbol('@kale/kit') // return false
```

### Arguments

| Arg     | Type  | Defaults |
| ------- | :---: | -------: |
| `value` | `any` |          |

### Return

|   Type    |
| :-------: |
| `boolean` |

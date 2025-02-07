# getStyle

Retrieves computed CSS styles for a given DOM element.

### Usage

```ts
import { getStyle } from '@kale/kit'

const elementStyle = getStyle(document.querySelector('div'))
```

### Arguments

| Arg       | Type      | Defaults |
| --------- | --------- | -------- |
| `element` | `Element` |          |

### Return

| Type                  |
| --------------------- |
| `CSSStyleDeclaration` |

# raf

Creates a Promise-based `requestAnimationFrame` that resolves on the next frame.

### Usage

```ts
import { raf } from '@kale/kit'

await raf()
console.log('Next animation frame')
```

### Return

| Type            |
| --------------- |
| `Promise<void>` |

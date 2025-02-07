<div align="center">
  <a href="https://kale.xulai.fun">
    <img src="https://kale.xulai.fun/logo.svg" width="150">
  </a>
  <h1>@kale/kit</h1>
  <p>A utilities library for front-end developers, lightweight and ts-friendly.</p>
  <p>
    <a href="https://kale.xulai.fun">Documentation</a> |
    <a href="https://github.com/PeopleWhoListenToStories/kale/blob/main/packages/kale-kit/README.zh-CN.md">中文介绍</a>
  </p>
</div>

---

### ✨ Features

- 🛠️ &nbsp; Provide utilities frequently used in daily development
- 🛠️ &nbsp; Utilities implementation is very lightweight
- 🛠️ &nbsp; Written based on ts, providing complete ts types
- 💪 &nbsp; Make sure more than 99% unit test coverage, providing stability assurance

### 📦 Installation

```shell
# npm
npm i @kale/kit -S
# yarn
yarn add @kale/kit
# pnpm
pnpm add @kale/kit
```

### 🚀 Usage

```ts
import { isString } from '@kale/kit'

isString('@kale/kit') // return true
isString(123) // return false
```
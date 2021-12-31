# sleep

Promise based async sleep function.

```bash
npm i @jellybeanci/sleep
```

### import module

```js
// ES6 Syntax
import {sleep, delay} from "@jellybeanci/sleep";

// Commonjs Syntax
const {sleep, delay} = require("@jellybeanci/sleep");
```

### usage

```js
console.log("See you after 5 sec");
await sleep(5000);
console.log("5 sec passed");
```

```js
console.log("See you after 5 sec");
await delay(5);
console.log("5 sec passed");
```

### types

```ts
type sleep = (millisecond: number) => Promise<unknown>;

type delay = (second: number) => Promise<unknow>;
```
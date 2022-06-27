---
title: Deno
---

# Deno

## DB connection

- https://github.com/eveningkid/denodb

## get path/dir of running file

```js
const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;
```

^ source: https://stackoverflow.com/a/61829368

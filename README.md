# Minimal repro for surreal/surreal.wasm#3

Output when run without an ID:

```
bash-5.1$ npm run start

> minimal-repro@1.0.0 start
> node index.js

Starting kvs store in memory
Started kvs store in memory
Executing: CREATE test CONTENT { name: "Scott" }
wasm://wasm/00f97bba:1


RuntimeError: unreachable
    at wasm://wasm/00f97bba:wasm-function[1874]:0x21168a
    at wasm://wasm/00f97bba:wasm-function[2318]:0x2236ed
    at wasm://wasm/00f97bba:wasm-function[4283]:0x24d9ad
    at wasm://wasm/00f97bba:wasm-function[174]:0x8fb24
    at wasm://wasm/00f97bba:wasm-function[5601]:0x25944e
    at wasm://wasm/00f97bba:wasm-function[5148]:0x256bab
    at wasm://wasm/00f97bba:wasm-function[362]:0x13ecfb
    at wasm://wasm/00f97bba:wasm-function[159]:0x6e1fd
    at wasm://wasm/00f97bba:wasm-function[163]:0x78f09
    at wasm://wasm/00f97bba:wasm-function[416]:0x15c23a

Node.js v18.12.1
```

Output when run with an ID:

```
bash-5.1$ npm run start

> minimal-repro@1.0.0 start
> node index.js

Starting kvs store in memory
Started kvs store in memory
Executing: CREATE test:123abc CONTENT { name: "Scott" }
Iterating: CREATE test:123abc CONTENT { name: "Scott" }
[ { time: '164.917µs', status: 'OK', result: [ [Object] ] } ]
```

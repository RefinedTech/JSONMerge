# Refined JSON Merge
 Extremely lightweight json merging lib

# Example
 ```js
 const { mergeJSON } = require('refined-json-merge');

 const a = { a: 1 };
 const b = { b: 1 };
 const c = mergeJSON(a, b);
 console.log(c); // { a: 1, b: 1 }
 ```
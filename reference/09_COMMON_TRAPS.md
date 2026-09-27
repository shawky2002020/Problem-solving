# Common JavaScript Traps

## Numeric Sort

Wrong:

```js
[10, 2, 5].sort();
```

Result:

```js
[10, 2, 5]
```

Correct:

```js
nums.sort((a, b) => a - b);
```

## `slice` vs `splice`

```js
slice   // copies, does not mutate
splice  // removes/inserts, mutates
```

## `map` vs `forEach`

```js
map     // returns a new array
forEach // returns undefined
```

## `filter` vs `find`

```js
filter // all matching values
find   // first matching value
```

## `includes` vs `has`

```js
array.includes(value);
set.has(value);
map.has(key);
```

## `forEach` Cannot Break

Use `for...of` when you need `break`, `continue`, or an outer `return`.

## Undefined Map Value

Wrong when value can legitimately be `undefined`:

```js
if (map.get(key)) {}
```

Correct:

```js
if (map.has(key)) {}
```

## `||` vs `??`

```js
0 || 10; // 10
0 ?? 10; // 0
```

Use `??` when zero, false, or empty string are valid.

## Shared Nested Arrays

Wrong:

```js
const matrix = Array(3).fill(Array(3).fill(0));
```

Correct:

```js
const matrix = Array.from(
  { length: 3 },
  () => Array(3).fill(0)
);
```

## Object Key Coercion

Object keys become strings or symbols.

Use `Map` when key type matters.

## Floating Point

```js
0.1 + 0.2 !== 0.3
```

Use tolerance for comparison.

## Empty Array Truthiness

```js
Boolean([]); // true
Boolean({}); // true
```

## Assignment Instead of Comparison

Wrong:

```js
if (x = 5) {}
```

Correct:

```js
if (x === 5) {}
```

## Off-by-One Errors

For inclusive bounds:

```js
while (left <= right)
```

For two pointers:

```js
while (left < right)
```

For ranges:

```js
right - left + 1
```

## Recursive Stack Overflow

Large input may require iterative DFS/BFS instead of recursion.

## Large Spread

Avoid:

```js
Math.max(...hugeArray);
```

Use a loop.

## `NaN`

```js
NaN === NaN; // false
Number.isNaN(value);
```

## `null` Type

```js
typeof null; // "object"
```

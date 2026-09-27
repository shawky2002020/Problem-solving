# Arrays

## Create

```js
const a = [];
const b = new Array(5);
const zeros = Array(5).fill(0);
const values = Array.from({ length: 5 }, (_, i) => i);
```

## Add and Remove

| Method | Return | Mutates | Typical Cost |
|---|---|---:|---:|
| `push(x)` | new length | Yes | O(1) amortized |
| `pop()` | removed value | Yes | O(1) |
| `unshift(x)` | new length | Yes | O(n) |
| `shift()` | removed value | Yes | O(n) |

```js
arr.push(value);
const last = arr.pop();
```

## Copy and Extract

```js
arr.slice();
arr.slice(start);
arr.slice(start, end);
```

- Does not mutate.
- `end` is excluded.

```js
const copy = [...arr];
const copy2 = Array.from(arr);
```

## Modify

```js
arr.splice(start, deleteCount, ...items);
```

- Mutates.
- Returns removed elements.

```js
arr.fill(value, start, end);
arr.reverse();
arr.sort(compareFn);
```

## Search

```js
arr.includes(value);       // boolean
arr.indexOf(value);        // index or -1
arr.find(predicate);       // first value or undefined
arr.findIndex(predicate);  // first index or -1
```

Use:

```js
const found = nums.find((x) => x > 10);
```

## Transform

```js
const doubled = nums.map((x) => x * 2);
const positives = nums.filter((x) => x > 0);
const total = nums.reduce((sum, x) => sum + x, 0);
```

## Test

```js
nums.some((x) => x < 0);   // at least one
nums.every((x) => x >= 0); // all
```

## Sort

```js
nums.sort((a, b) => a - b); // ascending
nums.sort((a, b) => b - a); // descending
```

Strings:

```js
words.sort();
words.sort((a, b) => a.localeCompare(b));
```

Objects:

```js
people.sort((a, b) => a.age - b.age);
```

## Join and Flatten

```js
chars.join("");
arrays.flat();
arrays.flat(depth);
```

## Useful Patterns

### Swap

```js
[arr[i], arr[j]] = [arr[j], arr[i]];
```

### Last Element

```js
const last = arr[arr.length - 1];
```

### Remove Duplicates

```js
const unique = [...new Set(arr)];
```

### Matrix

```js
const matrix = Array.from(
  { length: rows },
  () => Array(cols).fill(0)
);
```

Avoid:

```js
const matrix = Array(rows).fill(Array(cols).fill(0));
```

All rows would reference the same array.

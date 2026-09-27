# Complexity and Mutation

# Common Time Complexities

| Operation | Typical Complexity |
|---|---:|
| Array index access | O(1) |
| `push`, `pop` | O(1) amortized |
| `shift`, `unshift` | O(n) |
| `includes`, `indexOf`, `find` | O(n) |
| `map`, `filter`, `reduce` | O(n) |
| `sort` | O(n log n) |
| `Map.get/set/has` | O(1) average |
| `Set.add/has` | O(1) average |
| Object property access | O(1) average |
| String slicing | O(k) |
| Nested full loops | Often O(n²) |

# Mutating Methods

## Arrays

Mutate:

```js
push
pop
shift
unshift
splice
sort
reverse
fill
copyWithin
```

Do not mutate:

```js
slice
concat
map
filter
reduce
find
findIndex
some
every
includes
```

## Strings

String methods return new strings because strings are immutable.

# Copy Before Mutation

```js
const sorted = [...nums].sort((a, b) => a - b);
```

Nested arrays need deeper copying:

```js
const matrixCopy = matrix.map((row) => [...row]);
```

# Space Complexity Questions

Ask:

1. Did I create another array of size `n`?
2. Did I create a map or set with up to `n` entries?
3. How deep can recursion become?
4. Does the output array count as extra space?

# Hidden Performance Traps

Repeated string concatenation can be costly:

```js
let result = "";

for (const char of chars) {
  result += char;
}
```

For very large construction tasks:

```js
const result = parts.join("");
```

Avoid queue `shift()` in large BFS:

```js
const queue = [start];
let front = 0;
```

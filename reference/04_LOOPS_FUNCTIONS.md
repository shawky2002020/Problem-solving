# Loops and Functions

# Loop Selection

## Indexed Loop

Use when you need indexes.

```js
for (let i = 0; i < arr.length; i += 1) {
  console.log(i, arr[i]);
}
```

## `for...of`

Use for values.

```js
for (const value of arr) {}
for (const char of str) {}
for (const [key, value] of map) {}
```

## `for...in`

Use mainly for object keys.

```js
for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    console.log(key, obj[key]);
  }
}
```

Do not prefer `for...in` for arrays.

## `while`

Useful for pointers, queues, and binary search.

```js
while (left <= right) {}
```

# Control Flow

```js
break;    // exit loop
continue; // skip current iteration
return;   // exit function
```

# Function Forms

## Declaration

```js
function add(a, b) {
  return a + b;
}
```

Hoisted.

## Expression

```js
const add = function (a, b) {
  return a + b;
};
```

## Arrow

```js
const add = (a, b) => a + b;
```

Arrow functions do not have their own `this`, `arguments`, or `prototype`.

# Parameters

## Default

```js
function solve(nums = []) {}
```

## Rest

```js
function sum(...nums) {
  return nums.reduce((total, value) => total + value, 0);
}
```

## Spread

```js
const copy = [...nums];
const merged = [...a, ...b];
```

# Callbacks

```js
nums.map((value, index, array) => value * 2);
nums.filter((value) => value > 0);
nums.reduce((acc, value) => acc + value, 0);
```

# Recursion

Every recursive function needs:

1. Base case
2. Progress toward base case
3. Correct returned result

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

Tree DFS:

```js
function dfs(node) {
  if (!node) return 0;

  const left = dfs(node.left);
  const right = dfs(node.right);

  return 1 + Math.max(left, right);
}
```

# `forEach` Warning

```js
arr.forEach((value) => {
  if (value === target) return;
});
```

This returns only from the callback.

Use:

```js
for (const value of arr) {
  if (value === target) return value;
}
```

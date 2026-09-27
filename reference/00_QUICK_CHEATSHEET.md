# JavaScript Quick Cheat Sheet

## Arrays

```js
arr.length

arr.push(x)              // add end
arr.pop()                // remove end
arr.unshift(x)           // add start
arr.shift()              // remove start

arr.slice(start, end)    // copy, end excluded
arr.splice(start, count) // mutate

arr.includes(x)
arr.indexOf(x)
arr.find(fn)
arr.findIndex(fn)

arr.map(fn)
arr.filter(fn)
arr.reduce(fn, initial)
arr.some(fn)
arr.every(fn)

arr.sort((a, b) => a - b)
arr.reverse()
arr.join("")
```

## Strings

```js
str.length
str[i]

str.slice(start, end)
str.includes(text)
str.indexOf(text)
str.startsWith(text)
str.endsWith(text)

str.toLowerCase()
str.toUpperCase()
str.trim()
str.split("")
str.replace(oldValue, newValue)
str.replaceAll(oldValue, newValue)
```

## Map

```js
const map = new Map();

map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
map.size;
```

## Set

```js
const set = new Set();

set.add(value);
set.has(value);
set.delete(value);
set.size;
```

## Object

```js
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
Object.hasOwn(obj, key);
```

## Math

```js
Math.min(a, b)
Math.max(a, b)
Math.abs(x)
Math.floor(x)
Math.ceil(x)
Math.round(x)
Math.trunc(x)
Math.sqrt(x)
```

## Conversion

```js
Number(value)
String(value)
Boolean(value)

parseInt(value, 10)
parseFloat(value)

Array.from(iterable)
[...iterable]
```

## Most-Used Operators

```js
=== !==
< <= > >=
&& || !
?? ?.
+ - * / %
**
++
--
```

## Loop Choices

```js
for (let i = 0; i < n; i += 1) {}
for (const value of arr) {}
for (const [key, value] of map) {}
for (const key in obj) {}
```

## Top Element

```js
const top = stack[stack.length - 1];
```

## Queue Without `shift()`

```js
const queue = [start];
let front = 0;

while (front < queue.length) {
  const current = queue[front];
  front += 1;
}
```

## Safe Frequency Counter

```js
const frequency = new Map();

for (const value of values) {
  frequency.set(value, (frequency.get(value) ?? 0) + 1);
}
```

## Numeric Sort

```js
nums.sort((a, b) => a - b);
```

## Copy Before Mutation

```js
const sorted = [...nums].sort((a, b) => a - b);
```

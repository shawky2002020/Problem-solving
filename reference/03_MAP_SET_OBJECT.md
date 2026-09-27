# Map, Set, and Object

## Choose the Correct Structure

| Need | Use |
|---|---|
| Unique values | `Set` |
| Key → value lookup | `Map` |
| Frequency counter | `Map` |
| Fixed record with named fields | `Object` |
| Non-string keys | `Map` |
| JSON-compatible structure | `Object` |

# Map

```js
const map = new Map();

map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
map.clear();
map.size;
```

Iteration:

```js
for (const [key, value] of map) {}
for (const key of map.keys()) {}
for (const value of map.values()) {}
```

Frequency:

```js
map.set(value, (map.get(value) ?? 0) + 1);
```

Index lookup:

```js
for (let i = 0; i < nums.length; i += 1) {
  const needed = target - nums[i];

  if (map.has(needed)) {
    return [map.get(needed), i];
  }

  map.set(nums[i], i);
}
```

# Set

```js
const set = new Set();

set.add(value);
set.has(value);
set.delete(value);
set.clear();
set.size;
```

Remove duplicates:

```js
const unique = [...new Set(nums)];
```

Detect duplicate:

```js
const seen = new Set();

for (const value of nums) {
  if (seen.has(value)) return true;
  seen.add(value);
}
```

# Object

```js
const obj = {};

obj.key = value;
obj["dynamicKey"] = value;

Object.keys(obj);
Object.values(obj);
Object.entries(obj);
Object.hasOwn(obj, key);
```

Iteration:

```js
for (const [key, value] of Object.entries(obj)) {}
```

## Important Differences

```js
const obj = {};
obj[1] = "number";
obj["1"] = "string";
```

Both refer to the same object key.

```js
const map = new Map();
map.set(1, "number");
map.set("1", "string");
```

These are separate keys.

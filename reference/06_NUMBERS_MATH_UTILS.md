# Numbers, Math, and Utilities

# Convert

```js
Number(value);
parseInt(value, 10);
parseFloat(value);
```

Check:

```js
Number.isNaN(value);
Number.isFinite(value);
Number.isInteger(value);
```

Avoid global `isNaN()` when possible because it coerces values.

# Math

```js
Math.min(a, b);
Math.max(a, b);
Math.abs(x);

Math.floor(x);
Math.ceil(x);
Math.round(x);
Math.trunc(x);

Math.sqrt(x);
Math.pow(a, b);
Math.sign(x);
```

Random:

```js
Math.random(); // [0, 1)
```

# Array Min and Max

```js
Math.min(...nums);
Math.max(...nums);
```

Avoid spreading huge arrays.

Alternative:

```js
let minimum = Infinity;

for (const value of nums) {
  minimum = Math.min(minimum, value);
}
```

# Infinity

```js
let minValue = Infinity;
let maxValue = -Infinity;
```

# Safe Integers

```js
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;
Number.isSafeInteger(value);
```

For integers beyond safe range, use `BigInt`.

```js
const big = 12345678901234567890n;
```

Do not mix `BigInt` and `Number` directly.

# Floating Point

```js
0.1 + 0.2 !== 0.3
```

Compare with tolerance:

```js
Math.abs(a - b) < Number.EPSILON;
```

# Parse Digit Characters

```js
const digit = Number(char);
```

ASCII-style conversion:

```js
const digit = char.charCodeAt(0) - "0".charCodeAt(0);
```

# Useful Constants

```js
const MOD = 1_000_000_007;
```

Numeric separators improve readability.

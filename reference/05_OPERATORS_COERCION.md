# Operators and Coercion

# Equality

Always prefer:

```js
a === b
a !== b
```

Loose equality performs coercion:

```js
0 == false   // true
"" == false  // true
```

# Comparison

```js
< <= > >=
```

Strings compare lexicographically:

```js
"20" < "3" // true
```

Convert to numbers first when needed.

# Arithmetic

```js
+ - * / %
**
```

```js
7 % 2;  // 1
2 ** 3; // 8
```

`+` can concatenate strings:

```js
"5" + 1; // "51"
"5" - 1; // 4
```

# Assignment

```js
x += 1;
x -= 1;
x *= 2;
x /= 2;
x %= 2;
```

Logical assignment:

```js
x ||= fallback;   // when x is falsy
x &&= value;      // when x is truthy
x ??= fallback;   // when x is null or undefined
```

# Logical Operators

```js
a && b
a || b
!a
```

They return operands, not always booleans.

```js
0 || 10; // 10
5 && 10; // 10
```

# Nullish Coalescing

```js
value ?? fallback
```

Uses fallback only for `null` or `undefined`.

```js
0 ?? 10; // 0
0 || 10; // 10
```

# Optional Chaining

```js
user?.profile?.name
arr?.[0]
fn?.()
```

# Ternary

```js
const result = condition ? valueA : valueB;
```

# Increment

```js
i += 1; // preferred
i++;
++i;
```

Postfix returns old value; prefix returns new value.

```js
let x = 1;
const a = x++; // a = 1, x = 2

let y = 1;
const b = ++y; // b = 2, y = 2
```

# Bitwise Operators

```js
& | ^ ~ << >> >>>
```

Useful for special problems, not daily default.

Common:

```js
n & 1       // odd/even
n ^ n       // 0
x ^ 0       // x
```

JavaScript bitwise operations use signed 32-bit integers.

# Truthy and Falsy

Falsy values:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy, including:

```js
[]
{}
"0"
```

# Precedence Safety

Use parentheses when an expression mixes operators.

```js
const mid = left + Math.floor((right - left) / 2);
```

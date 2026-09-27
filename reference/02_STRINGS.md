# Strings

Strings are immutable.

```js
str[0] = "X"; // does not modify the string
```

## Access

```js
str.length;
str[i];
str.at(-1);
str.charCodeAt(i);
```

## Extract

```js
str.slice(start, end);
str.substring(start, end);
```

Prefer `slice()` because it supports negative indexes.

## Search

```js
str.includes(text);
str.indexOf(text);
str.lastIndexOf(text);
str.startsWith(prefix);
str.endsWith(suffix);
```

## Clean and Normalize

```js
str.trim();
str.trimStart();
str.trimEnd();
str.toLowerCase();
str.toUpperCase();
```

## Split and Join

```js
const chars = str.split("");
const words = str.split(" ");
const result = chars.join("");
```

## Replace

```js
str.replace("a", "b");       // first match
str.replaceAll("a", "b");    // all string matches
str.replace(/\s+/g, " ");    // regex example
```

## Character Checks

```js
const isDigit = char >= "0" && char <= "9";
const isLower = char >= "a" && char <= "z";
const isUpper = char >= "A" && char <= "Z";
```

Alphanumeric:

```js
const isAlphaNumeric = /[a-z0-9]/i.test(char);
```

## Unicode-Safe Iteration

```js
for (const char of str) {
  console.log(char);
}
```

## Convert

```js
Number("42");       // 42
String(42);         // "42"
Array.from(str);    // characters
[...str];           // characters
```

## Common Patterns

### Reverse

```js
const reversed = [...str].reverse().join("");
```

### Palindrome

```js
let left = 0;
let right = str.length - 1;

while (left < right) {
  if (str[left] !== str[right]) return false;
  left += 1;
  right -= 1;
}

return true;
```

### Frequency

```js
const frequency = new Map();

for (const char of str) {
  frequency.set(char, (frequency.get(char) ?? 0) + 1);
}
```

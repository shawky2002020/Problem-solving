# JavaScript Problem-Solving Reference

A fast-scanning reference for coding interviews and algorithm practice.

## Start Here

1. Open `00_QUICK_CHEATSHEET.md` before solving.
2. Open the topic file only when you need a specific utility.
3. Use `07_PATTERN_TEMPLATES.md` when you recognize the algorithm pattern.
4. Use `09_COMMON_TRAPS.md` before submitting.

## Files

| File | Purpose |
|---|---|
| `00_QUICK_CHEATSHEET.md` | Most-used syntax on one page |
| `01_ARRAYS.md` | Array methods, mutation, searching, sorting |
| `02_STRINGS.md` | String methods, conversion, character handling |
| `03_MAP_SET_OBJECT.md` | Hashing, frequencies, lookup structures |
| `04_LOOPS_FUNCTIONS.md` | Loops, callbacks, recursion, function behavior |
| `05_OPERATORS_COERCION.md` | Operators, equality, nullish values, precedence |
| `06_NUMBERS_MATH_UTILS.md` | Number parsing, Math utilities, numeric safety |
| `07_PATTERN_TEMPLATES.md` | Reusable interview templates |
| `08_COMPLEXITY_MUTATION.md` | Time complexity and mutating methods |
| `09_COMMON_TRAPS.md` | Frequent JavaScript mistakes |
| `10_DEBUG_CHECKLIST.md` | Final validation checklist |

## Core Rule

For every method, remember only four things:

```text
Input → Return value → Mutation → Complexity
```

Example:

```js
arr.sort((a, b) => a - b);
```

```text
Input: comparator
Returns: same array reference
Mutates: yes
Complexity: usually O(n log n)
```

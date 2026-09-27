# Debug and Submission Checklist

## Before Coding

- What is the input shape?
- What is the output shape?
- What are the constraints?
- Is the input sorted?
- Are duplicates possible?
- Can values be negative?
- Is an empty input possible?
- Is this contiguous or non-contiguous?

## While Designing

- What is the brute-force solution?
- What repeated work can be removed?
- Do I need fast lookup?
- Does sorting help?
- Is there a moving window?
- Is there a monotonic condition?
- Does the problem describe a graph implicitly?

## Before Submitting

- Correct numeric comparator?
- Correct loop boundary?
- Correct empty-input behavior?
- Correct one-element behavior?
- Duplicate values tested?
- Negative values tested?
- No accidental mutation?
- `Map.has()` used where necessary?
- Queue avoids repeated `shift()`?
- Recursion has a base case?
- Time complexity acceptable?
- Space complexity explained?

## Tiny Test Set

```js
[]
[1]
[1, 1]
[1, 2]
[2, 1]
[-1, 0, 1]
```

Strings:

```js
""
"a"
"aa"
"ab"
"Aa"
" a "
```

## Explain the Solution

Use this format:

```text
Pattern:
Recognition clue:
Data structure:
Algorithm:
Time:
Space:
Edge cases:
```

## Review Note

```text
Problem:
Pattern:
Methods used:
Mistake:
Recognition clue:
Re-solve tomorrow: Yes / No
Confidence: Green / Yellow / Red
```

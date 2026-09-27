# Problem-Solving Pattern Templates

# Frequency Map

```js
function buildFrequency(values) {
  const frequency = new Map();

  for (const value of values) {
    frequency.set(value, (frequency.get(value) ?? 0) + 1);
  }

  return frequency;
}
```

# Two Sum Lookup

```js
function twoSum(nums, target) {
  const indexes = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const needed = target - nums[i];

    if (indexes.has(needed)) {
      return [indexes.get(needed), i];
    }

    indexes.set(nums[i], i);
  }

  return [];
}
```

# Two Pointers

```js
let left = 0;
let right = nums.length - 1;

while (left < right) {
  if (condition) {
    left += 1;
  } else {
    right -= 1;
  }
}
```

# Sliding Window

```js
let left = 0;
let answer = 0;

for (let right = 0; right < nums.length; right += 1) {
  // Add nums[right] to window

  while (windowIsInvalid) {
    // Remove nums[left] from window
    left += 1;
  }

  answer = Math.max(answer, right - left + 1);
}
```

# Prefix Sum

```js
const prefix = Array(nums.length + 1).fill(0);

for (let i = 0; i < nums.length; i += 1) {
  prefix[i + 1] = prefix[i] + nums[i];
}

const rangeSum = prefix[right + 1] - prefix[left];
```

# Stack

```js
const stack = [];

for (const value of values) {
  while (stack.length > 0 && condition) {
    stack.pop();
  }

  stack.push(value);
}
```

# Queue / BFS

```js
const queue = [start];
let front = 0;

while (front < queue.length) {
  const current = queue[front];
  front += 1;

  for (const next of neighbors(current)) {
    queue.push(next);
  }
}
```

# Binary Search: Exact Value

```js
let left = 0;
let right = nums.length - 1;

while (left <= right) {
  const mid = left + Math.floor((right - left) / 2);

  if (nums[mid] === target) return mid;

  if (nums[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

return -1;
```

# Binary Search: Minimum Valid Answer

```js
let left = minimumPossible;
let right = maximumPossible;

while (left < right) {
  const mid = left + Math.floor((right - left) / 2);

  if (isValid(mid)) {
    right = mid;
  } else {
    left = mid + 1;
  }
}

return left;
```

# Linked List Reverse

```js
let previous = null;
let current = head;

while (current) {
  const next = current.next;
  current.next = previous;
  previous = current;
  current = next;
}

return previous;
```

# Fast and Slow Pointers

```js
let slow = head;
let fast = head;

while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}
```

# Tree DFS

```js
function dfs(node) {
  if (!node) return;

  dfs(node.left);
  dfs(node.right);
}
```

# Tree BFS by Level

```js
const queue = [root];
let front = 0;

while (front < queue.length) {
  const levelSize = queue.length - front;

  for (let i = 0; i < levelSize; i += 1) {
    const node = queue[front];
    front += 1;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
```

# Grid DFS

```js
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function dfs(row, col) {
  if (
    row < 0 ||
    row >= rows ||
    col < 0 ||
    col >= cols ||
    visited[row][col]
  ) {
    return;
  }

  visited[row][col] = true;

  for (const [dr, dc] of directions) {
    dfs(row + dr, col + dc);
  }
}
```

# Intervals

```js
intervals.sort((a, b) => a[0] - b[0]);

const merged = [];

for (const interval of intervals) {
  const last = merged[merged.length - 1];

  if (!last || last[1] < interval[0]) {
    merged.push([...interval]);
  } else {
    last[1] = Math.max(last[1], interval[1]);
  }
}
```

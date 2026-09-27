# Problem Solving & Algorithms

A showcase repository of algorithmic problem-solving solutions, competitive programming contests, and JavaScript system patterns implemented in **TypeScript**, **JavaScript**, and **SQL**.

---

## 📁 Repository Structure

```
├── codeforces/                       # Codeforces competitive programming rounds
│   ├── week-02/                      # Week 2 contest solutions
│   └── week-03/                      # Week 3 contest solutions
├── leetcode/                         # LeetCode solutions organized by algorithmic pattern
│   ├── arrays-and-hashing/           # Hash maps, sets, frequency counting
│   ├── two-pointers/                 # Inward converging & multi-pointer patterns
│   ├── sliding-window/               # Fixed and dynamic sliding windows
│   ├── stack/                        # Monotonic stacks and auxiliary min stacks
│   ├── binary-search/                # Standard, 2D matrix, and rotated array binary search
│   ├── linked-list/                  # Fast & slow pointer (Floyd's cycle detection)
│   ├── prefix-sum/                   # Running sums & balance tracking with hash maps
│   └── database/                     # SQL queries and ranking functions
├── hackerrank/                       # HackerRank algorithmic challenges
├── javascript/                       # Practical JavaScript patterns & utility polyfills
│   ├── async-programming/            # Callback Hell -> Promises -> async/await refactoring
│   └── algorithms-and-patterns/      # Polyfills (map, filter, debounce), deep flatten, groupBy
└── reference/                        # Comprehensive JS problem-solving cheatsheets & guides
```

---

## 🧠 Problem Catalog

### 1. LeetCode Solutions

Detailed index available at [`leetcode/README.md`](./leetcode/README.md).

| Category | Problem | Difficulty | Solution | Approach / Complexity |
|----------|---------|------------|----------|-----------------------|
| **Arrays & Hashing** | [1. Two Sum](https://leetcode.com/problems/two-sum/) | Easy | [`two-sum.ts`](./leetcode/arrays-and-hashing/two-sum.ts) | Hash Map `O(n)` |
| | [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | [`group-anagrams.ts`](./leetcode/arrays-and-hashing/group-anagrams.ts) | Count Hashing `O(n * k)` |
| | [169. Majority Element](https://leetcode.com/problems/majority-element/) | Easy | [`majority-element.ts`](./leetcode/arrays-and-hashing/majority-element.ts) | Boyer-Moore `O(1)` space |
| | [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | [`contains-duplicate.ts`](./leetcode/arrays-and-hashing/contains-duplicate.ts) | Hash Set `O(n)` |
| | [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Easy | [`valid-anagram.ts`](./leetcode/arrays-and-hashing/valid-anagram.ts) | Frequency Map `O(n)` |
| **Two Pointers** | [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | [`container-with-most-water.ts`](./leetcode/two-pointers/container-with-most-water.ts) | Two Pointers `O(n)` |
| | [15. 3Sum](https://leetcode.com/problems/3sum/) | Medium | [`3sum.ts`](./leetcode/two-pointers/3sum.ts) | Sort + Two Pointers `O(n²)` |
| | [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | Easy | [`valid-palindrome.ts`](./leetcode/two-pointers/valid-palindrome.ts) | Two Pointers `O(n)` |
| | [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) | Medium | [`reverse-words-in-a-string.ts`](./leetcode/two-pointers/reverse-words-in-a-string.ts) | Two Pointers `O(n)` |
| | [167. Two Sum II - Sorted Array](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Medium | [`two-sum-ii-input-array-is-sorted.ts`](./leetcode/two-pointers/two-sum-ii-input-array-is-sorted.ts) | Two Pointers `O(1)` space |
| **Sliding Window** | [3. Longest Substring Without Repeating](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | [`longest-substring-without-repeating-characters.ts`](./leetcode/sliding-window/longest-substring-without-repeating-characters.ts) | Dynamic Window with Set `O(n)` |
| | [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | [`best-time-to-buy-and-sell-stock.ts`](./leetcode/sliding-window/best-time-to-buy-and-sell-stock.ts) | Running Min Price `O(n)` |
| | [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | Medium | [`minimum-size-subarray-sum.ts`](./leetcode/sliding-window/minimum-size-subarray-sum.ts) | Dynamic Window `O(n)` |
| | [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | Medium | [`longest-repeating-character-replacement.ts`](./leetcode/sliding-window/longest-repeating-character-replacement.ts) | Frequency Count Window `O(n)` |
| **Stack** | [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Easy | [`valid-parentheses.ts`](./leetcode/stack/valid-parentheses.ts) | Bracket Matching Stack `O(n)` |
| | [155. Min Stack](https://leetcode.com/problems/min-stack/) | Medium | [`min-stack.ts`](./leetcode/stack/min-stack.ts) | Auxiliary Min Stack `O(1)` |
| | [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | Medium | [`daily-temperatures.ts`](./leetcode/stack/daily-temperatures.ts) | Monotonic Stack `O(n)` |
| **Binary Search** | [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | [`search-in-rotated-sorted-array.ts`](./leetcode/binary-search/search-in-rotated-sorted-array.ts) | Modified Binary Search `O(log n)` |
| | [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | Medium | [`search-a-2d-matrix.ts`](./leetcode/binary-search/search-a-2d-matrix.ts) | Virtual 1D Binary Search `O(log mn)` |
| | [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | [`find-minimum-in-rotated-sorted-array.ts`](./leetcode/binary-search/find-minimum-in-rotated-sorted-array.ts) | Inflection Point `O(log n)` |
| | [704. Binary Search](https://leetcode.com/problems/binary-search/) | Easy | [`binary-search.ts`](./leetcode/binary-search/binary-search.ts) | Standard Binary Search `O(log n)` |
| **Linked List** | [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | Easy | [`linked-list-cycle.ts`](./leetcode/linked-list/linked-list-cycle.ts) | Floyd's Fast & Slow `O(1)` space |
| **Prefix Sum** | [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/) | Medium | [`contiguous-array.ts`](./leetcode/prefix-sum/contiguous-array.ts) | Balance Map `O(n)` |
| | [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Medium | [`subarray-sum-equals-k.ts`](./leetcode/prefix-sum/subarray-sum-equals-k.ts) | Prefix Sum Map `O(n)` |
| **Database / SQL** | [176. Second Highest Salary](https://leetcode.com/problems/second-highest-salary/) | Medium | [`176-second-highest-salary.sql`](./leetcode/database/176-second-highest-salary.sql) | Subquery / `LIMIT OFFSET` |
| | [177. Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/) | Medium | [`177-nth-highest-salary.sql`](./leetcode/database/177-nth-highest-salary.sql) | User Function / `OFFSET` |

---

### 2. Codeforces Contests

#### [Week 2 Contest](./codeforces/week-02/contest.md)
- **P1**: [Anton and Letters (443A)](./codeforces/week-02/p1-anton-and-letters.ts) — Set / Character Parsing
- **P2**: [Xenia and Ringroad (339B)](./codeforces/week-02/p2-xenia-and-ringroad.ts) — Circular Ringroad Simulation
- **P3**: [Sale (34B)](./codeforces/week-02/p3-sale.ts) — Greedy Cost Minimization / Sorting
- **P4**: [Points in Segments (1015A)](./codeforces/week-02/p4-points-in-segments.ts) — Segment Coordinate Coverage
- **P5**: [Diverse Team (988A)](./codeforces/week-02/p5-diverse-team.ts) — Distinct Rating Collection

#### [Week 3 Contest](./codeforces/week-03/contest.md)
- **P1**: [Sereja and Dima (381A)](./codeforces/week-03/p1-sereja-and-dima.ts) — Two Pointers Greedy Pick
- **P2**: [Books (279B)](./codeforces/week-03/p2-books.ts) — Dynamic Sliding Window
- **P3**: [Vasya and String (676C)](./codeforces/week-03/p3-vasya-and-string.ts) — Maximum Contiguous Character Substring
- **P4**: [They Are Everywhere (701C)](./codeforces/week-03/p4-they-are-everywhere.ts) — Minimum Substring with All Types
- **P6**: [Petya and Strings (112A)](./codeforces/week-03/p6-petya-and-strings.ts) — Lexicographical Case-Insensitive Comparison
- **P7**: [Gravity Flip (405A)](./codeforces/week-03/p7-gravity-flip.ts) — Column Gravity Physics Simulation

---

### 3. HackerRank Challenges

- [Maximize Rental Revenue](./hackerrank/maximize-rental-revenue.ts) — Priority Queue / Binary Max-Heap for greedy resource allocation.
- [Minimal Operations](./hackerrank/minimal-operations.ts) — Greedy string manipulation eliminating adjacent duplicates.

---

### 4. JavaScript Practical Patterns & Utilities

#### Asynchronous Programming
- [Callback Hell to Async/Await](./javascript/async-programming/callback-to-async-await.js) — Step-by-step refactoring from nested callbacks to Promise chaining and modern async/await with error handling.
- [Promise Sleep / Delay](./javascript/async-programming/sleep-delay.ts) — Asynchronous non-blocking timer utility.

#### Algorithms & Patterns
- [Polyfills (map, filter, debounce)](./javascript/algorithms-and-patterns/polyfills.ts) — Hand-crafted implementations of array utilities and rate-limiting debounce.
- [Deep Flatten Nested Array](./javascript/algorithms-and-patterns/flatten-nested-array.ts) — Recursive flattening of arbitrarily nested arrays.
- [Group by Property](./javascript/algorithms-and-patterns/group-by-property.ts) — Generic grouping function over collections.
- [Array to Object Record](./javascript/algorithms-and-patterns/array-to-object.ts) — Transforming object arrays into key-value dictionaries.
- [Second Largest Distinct Number](./javascript/algorithms-and-patterns/second-largest-number.ts) — Single-pass `O(n)` second largest search.
- [Seat Allocation](./javascript/algorithms-and-patterns/seat-allocation.ts) — Dynamic seat reservation and row eligibility matching.

---

### 5. Reference Guides

Comprehensive JavaScript cheatsheets in [`reference/`](./reference/):
- [`00_QUICK_CHEATSHEET.md`](./reference/00_QUICK_CHEATSHEET.md)
- [`01_ARRAYS.md`](./reference/01_ARRAYS.md)
- [`02_STRINGS.md`](./reference/02_STRINGS.md)
- [`03_MAP_SET_OBJECT.md`](./reference/03_MAP_SET_OBJECT.md)
- [`04_LOOPS_FUNCTIONS.md`](./reference/04_LOOPS_FUNCTIONS.md)
- [`05_OPERATORS_COERCION.md`](./reference/05_OPERATORS_COERCION.md)
- [`06_NUMBERS_MATH_UTILS.md`](./reference/06_NUMBERS_MATH_UTILS.md)
- [`07_PATTERN_TEMPLATES.md`](./reference/07_PATTERN_TEMPLATES.md)
- [`08_COMPLEXITY_MUTATION.md`](./reference/08_COMPLEXITY_MUTATION.md)
- [`09_COMMON_TRAPS.md`](./reference/09_COMMON_TRAPS.md)
- [`10_DEBUG_CHECKLIST.md`](./reference/10_DEBUG_CHECKLIST.md)

---

## 🚀 Running Solutions

Run any TypeScript solution directly using `npx tsx`:

```bash
# Run a LeetCode problem
npx tsx leetcode/arrays-and-hashing/two-sum.ts

# Run a Codeforces problem
npx tsx codeforces/week-02/p1-anton-and-letters.ts

# Run a HackerRank problem
npx tsx hackerrank/maximize-rental-revenue.ts

# Run JavaScript async workflow
node javascript/async-programming/callback-to-async-await.js
```

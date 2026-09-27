# LeetCode Practice Index

Comprehensive collection of LeetCode solutions written in TypeScript and SQL, organized by algorithm and data structure pattern.

**Total Problems Solved:** **26** (9 Easy, 17 Medium)

## Topic Index

### 1. Arrays & Hashing
| Problem | Difficulty | Solution File | Approach |
|---------|------------|---------------|----------|
| [1. Two Sum](https://leetcode.com/problems/two-sum/) | Easy | [`arrays-and-hashing/two-sum.ts`](./arrays-and-hashing/two-sum.ts) | Hash Map `O(n)` |
| [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | [`arrays-and-hashing/group-anagrams.ts`](./arrays-and-hashing/group-anagrams.ts) | Character Count Hashing |
| [169. Majority Element](https://leetcode.com/problems/majority-element/) | Easy | [`arrays-and-hashing/majority-element.ts`](./arrays-and-hashing/majority-element.ts) | Boyer-Moore Voting Algorithm `O(1)` space |
| [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | [`arrays-and-hashing/contains-duplicate.ts`](./arrays-and-hashing/contains-duplicate.ts) | Hash Set `O(n)` |
| [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Easy | [`arrays-and-hashing/valid-anagram.ts`](./arrays-and-hashing/valid-anagram.ts) | Frequency Map `O(n)` |

### 2. Two Pointers
| Problem | Difficulty | Solution File | Approach |
|---------|------------|---------------|----------|
| [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | [`two-pointers/container-with-most-water.ts`](./two-pointers/container-with-most-water.ts) | Inward Converging Pointers |
| [15. 3Sum](https://leetcode.com/problems/3sum/) | Medium | [`two-pointers/3sum.ts`](./two-pointers/3sum.ts) | Sort + Two Pointers |
| [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | Easy | [`two-pointers/valid-palindrome.ts`](./two-pointers/valid-palindrome.ts) | Two Pointers |
| [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) | Medium | [`two-pointers/reverse-words-in-a-string.ts`](./two-pointers/reverse-words-in-a-string.ts) | Two Pointers / Token Parsing |
| [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Medium | [`two-pointers/two-sum-ii-input-array-is-sorted.ts`](./two-pointers/two-sum-ii-input-array-is-sorted.ts) | Two Pointers `O(1)` space |

### 3. Sliding Window
| Problem | Difficulty | Solution File | Approach |
|---------|------------|---------------|----------|
| [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | [`sliding-window/longest-substring-without-repeating-characters.ts`](./sliding-window/longest-substring-without-repeating-characters.ts) | Dynamic Window with Set |
| [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | [`sliding-window/best-time-to-buy-and-sell-stock.ts`](./sliding-window/best-time-to-buy-and-sell-stock.ts) | Running Min Price |
| [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) | Medium | [`sliding-window/minimum-size-subarray-sum.ts`](./sliding-window/minimum-size-subarray-sum.ts) | Dynamic Expanding/Contracting Window |
| [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | Medium | [`sliding-window/longest-repeating-character-replacement.ts`](./sliding-window/longest-repeating-character-replacement.ts) | Frequency Count Sliding Window |

### 4. Stack
| Problem | Difficulty | Solution File | Approach |
|---------|------------|---------------|----------|
| [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Easy | [`stack/valid-parentheses.ts`](./stack/valid-parentheses.ts) | Bracket Matching Stack |
| [155. Min Stack](https://leetcode.com/problems/min-stack/) | Medium | [`stack/min-stack.ts`](./stack/min-stack.ts) | Auxiliary Min Stack `O(1)` |
| [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | Medium | [`stack/daily-temperatures.ts`](./stack/daily-temperatures.ts) | Monotonic Decreasing Stack |

### 5. Binary Search
| Problem | Difficulty | Solution File | Approach |
|---------|------------|---------------|----------|
| [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | [`binary-search/search-in-rotated-sorted-array.ts`](./binary-search/search-in-rotated-sorted-array.ts) | Modified Binary Search |
| [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | Medium | [`binary-search/search-a-2d-matrix.ts`](./binary-search/search-a-2d-matrix.ts) | Virtual 1D Binary Search |
| [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | [`binary-search/find-minimum-in-rotated-sorted-array.ts`](./binary-search/find-minimum-in-rotated-sorted-array.ts) | Inflection Point Search |
| [704. Binary Search](https://leetcode.com/problems/binary-search/) | Easy | [`binary-search/binary-search.ts`](./binary-search/binary-search.ts) | Standard Binary Search |

### 6. Linked List
| Problem | Difficulty | Solution File | Approach |
|---------|------------|---------------|----------|
| [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | Easy | [`linked-list/linked-list-cycle.ts`](./linked-list/linked-list-cycle.ts) | Floyd's Cycle Finding (Fast & Slow) |

### 7. Prefix Sum
| Problem | Difficulty | Solution File | Approach |
|---------|------------|---------------|----------|
| [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/) | Medium | [`prefix-sum/contiguous-array.ts`](./prefix-sum/contiguous-array.ts) | Prefix Balance Hash Map |
| [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Medium | [`prefix-sum/subarray-sum-equals-k.ts`](./prefix-sum/subarray-sum-equals-k.ts) | Prefix Sum Frequency Map |

### 8. Database / SQL
| Problem | Difficulty | Solution File | Approach |
|---------|------------|---------------|----------|
| [176. Second Highest Salary](https://leetcode.com/problems/second-highest-salary/) | Medium | [`database/176-second-highest-salary.sql`](./database/176-second-highest-salary.sql) | Subquery / `LIMIT 1 OFFSET 1` |
| [177. Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/) | Medium | [`database/177-nth-highest-salary.sql`](./database/177-nth-highest-salary.sql) | User-defined Function / `OFFSET` |

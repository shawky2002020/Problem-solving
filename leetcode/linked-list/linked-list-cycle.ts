/**
 * Problem: Linked List Cycle
 * Platform: LeetCode #141
 * Link: https://leetcode.com/problems/linked-list-cycle/
 * Difficulty: Easy
 * Category: Linked List / Fast & Slow Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1) using Floyd's Tortoise and Hare, O(n) using Set
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Approach 1: Floyd's Cycle Finding Algorithm (Optimal O(1) Memory)
export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow!.next;
    fast = fast.next.next;
  }

  return false;
}

// Approach 2: Hash Set (O(n) Memory)
export function hasCycleSet(head: ListNode | null): boolean {
  const visited = new Set<ListNode>();
  let current = head;

  while (current) {
    if (visited.has(current)) {
      return true;
    }
    visited.add(current);
    current = current.next;
  }

  return false;
}

// Example Execution
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // cycle back to node 2

console.log("Has cycle:", hasCycle(node1)); // true

const linear1 = new ListNode(1);
const linear2 = new ListNode(2);
linear1.next = linear2;
console.log("Has cycle:", hasCycle(linear1)); // false

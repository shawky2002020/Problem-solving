class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {

  let visited = new Set();
  while (!visited.has(head) && head?.next) {
    visited.add(head);
    head = head?.next;
  }
  if (head?.next) { //cycle
    return true
  }
  else{return false}

}



/**
 * Problem: Maximize Rental Revenue
 * Platform: HackerRank
 * Category: Greedy / Priority Queue (Max-Heap)
 *
 * Description:
 * Given an array vmStock representing the available stock of various virtual machine types,
 * and an integer m representing the number of customer requests. Each customer rents
 * the VM with the highest current available stock (ties broken arbitrarily).
 * The rental revenue obtained from a VM equals its current stock count. After renting,
 * that VM's available stock decreases by 1. Return the maximum total revenue possible.
 *
 * Time Complexity: O(n + m log n) using Max-Heap
 * Space Complexity: O(1) in-place heap over input array
 */

class MaxHeap {
  private heap: number[];
  private size: number;

  constructor(arr: number[]) {
    this.heap = arr;
    this.size = arr.length;
    this.buildHeap();
  }

  private buildHeap(): void {
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  private heapifyDown(idx: number): void {
    let curr = idx;

    while (true) {
      let largest = curr;
      const leftChild = curr * 2 + 1;
      const rightChild = leftChild + 1;

      if (leftChild < this.size && this.heap[leftChild] > this.heap[largest]) {
        largest = leftChild;
      }
      if (rightChild < this.size && this.heap[rightChild] > this.heap[largest]) {
        largest = rightChild;
      }

      if (largest === curr) break;

      const temp = this.heap[curr];
      this.heap[curr] = this.heap[largest];
      this.heap[largest] = temp;

      curr = largest;
    }
  }

  public extractMax(): number {
    if (this.size === 0) return 0;
    const maxVal = this.heap[0];

    // Decrement stock and restore heap property
    this.heap[0] = Math.max(0, this.heap[0] - 1);
    this.heapifyDown(0);

    return maxVal;
  }
}

export function maximizeRentalRevenue(vmStock: number[], m: number): number {
  const stockCopy = [...vmStock];
  const maxHeap = new MaxHeap(stockCopy);
  let totalRevenue = 0;

  for (let k = 0; k < m; k++) {
    const currentMax = maxHeap.extractMax();
    if (currentMax <= 0) break;
    totalRevenue += currentMax;
  }

  return totalRevenue;
}

// Example Execution
console.log("Max revenue:", maximizeRentalRevenue([2, 3, 4, 5], 3)); // 5 + 4 + 4 = 13
console.log("Max revenue:", maximizeRentalRevenue([1, 2, 4], 4)); // 4 + 3 + 2 + 2 = 11

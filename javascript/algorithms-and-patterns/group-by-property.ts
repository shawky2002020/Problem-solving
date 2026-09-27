/**
 * Problem: Group Array of Objects by Property
 * Category: JavaScript Data Manipulation
 *
 * Description:
 * Groups an array of objects by a specified key.
 * e.g., `[{ name: "A", role: "dev" }, { name: "B", role: "qa" }, { name: "C", role: "dev" }]`
 * into `{ dev: ["A", "C"], qa: ["B"] }` while maintaining element order.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export interface TeamMember {
  name: string;
  role: string;
}

export function groupByRole(members: TeamMember[]): Record<string, string[]> {
  return members.reduce((acc, curr) => {
    if (!acc[curr.role]) {
      acc[curr.role] = [];
    }
    acc[curr.role].push(curr.name);
    return acc;
  }, {} as Record<string, string[]>);
}

// Generic GroupBy function supporting arbitrary object shapes and keys
export function groupBy<T, K extends keyof T>(
  items: T[],
  key: K,
): Record<string, T[]> {
  return items.reduce((acc, item) => {
    const groupKey = String(item[key]);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

// Example Execution
const team: TeamMember[] = [
  { name: "Alice", role: "engineering" },
  { name: "Bob", role: "design" },
  { name: "Charlie", role: "engineering" },
  { name: "Dana", role: "product" },
];

console.log("Grouped by role:", groupByRole(team));
// Output: { engineering: [ 'Alice', 'Charlie' ], design: [ 'Bob' ], product: [ 'Dana' ] }

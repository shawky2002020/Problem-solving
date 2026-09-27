/**
 * Problem: Promisified Sleep / Delay Utility
 * Category: JavaScript Asynchronous Patterns
 *
 * Description:
 * Implements a non-blocking asynchronous sleep function returning a Promise,
 * demonstrating microtask scheduling and async sequence execution.
 */

export function delay(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Delay of ${ms}ms finished`);
    }, ms);
  });
}

// Example Execution
export async function runExample(): Promise<void> {
  console.log("Start");
  const message = await delay(500);
  console.log(message);
  console.log("Done");
}

if (typeof require !== "undefined" && require.main === module) {
  runExample();
}

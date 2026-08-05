function isValid(s: string): boolean {
  let stack: string[] = [];
  let mapBrackets = new Map<string, string>([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  let openingArr = Array.from(mapBrackets.keys());
  for (let char of s) {
    if (openingArr.includes(char)) //Opening
    {
      stack.push(char);
    } else {
      let matchingTarget = stack.pop();
      if (char !== mapBrackets.get(matchingTarget!)) return false;
    }
  }

  return stack.length == 0;
}

// console.log(isValid("{[[]]}}"));


class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    const min = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}



/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */




function dailyTemperatures(temperatures: number[]): number[] {
  let res = []
  let finded = false;
    for (let i = 0; i < temperatures.length; i++) {
      finded = false
      for (let k = i + 1; k < temperatures.length; k++) {
        if (temperatures[k] > temperatures[i] ) {
          res.push(k - i);
          finded = true
          break
        }
      }
      if (!finded) {
        res.push(0)
      }
      
    }
    return res
};


console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));



//IMP --> revise this sol
function dailyTemperaturesStack(temperatures: number[]): number[] {
  const res = new Array(temperatures.length).fill(0);
  const stack: number[] = []; // stores indices

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      res[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return res;
}
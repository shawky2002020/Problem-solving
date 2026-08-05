function isAnagram(s: string, t: string): boolean {
  let sMap = new Map();
  if (s.length != t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
  }
  for (let k = 0; k < t.length; k++) {
    if (sMap.has(t[k]) && sMap.get(t[k]) > 0) {
      sMap.set(t[k], (sMap.get(t[k]) ?? 0) - 1);
    } else {
      return false;
    }
  }
  return true;
}

//  i --> x
// h[i] --> height
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    maxArea = Math.max(maxArea , Math.min(height[left], height[right]) * (right - left))
    if (height[left] <= height[right]) {
      left++;
    }
    else if(height[left] > height[right]){
      right --;
    }
  
  }
  return maxArea
}


console.log(maxArea([1,1]));


function loopForever(): never {
  while (true) {}
}

loopForever()
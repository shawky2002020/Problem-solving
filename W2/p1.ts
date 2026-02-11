// {a, b, c}

function split(input: string) {
  const inpArr = input.match(/\w+/g);
  const result = new Set(inpArr)

  return Array.from(result).length;
}

console.log(split("{a, b, c , c ,c}"));






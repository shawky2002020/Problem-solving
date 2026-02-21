function petyaAndStrings(word1: string, word2: string) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  let result = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1.charCodeAt(i) < word2.charCodeAt(i)) {
      result = -1;
      return result;
    } else if (word1.charCodeAt(i) > word2.charCodeAt(i)) {
      result = 1;
      return result;
    }
  }
  return result;
}

console.log(petyaAndStrings("Ab", "ac"));

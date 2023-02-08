/* 
Write a function to find the longest common prefix string amongst an array of
strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    let current = strs[i];

    while (current.indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1);
      if (prefix.length === 0) return '';
    }
  }

  return prefix;
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('#longestCommonPrefix', () => {
    it('should return fl', () => {
      expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
    });
    it('should return ""', () => {
      expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
    });
  });
}

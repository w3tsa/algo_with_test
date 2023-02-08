/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strings) {
  if (!strings.length) return "";
  if (strings.length === 1) return strings[0];

  let prefix = strings[0];
  // console.log(prefix);
  for (let i = 1; i < strings.length; i++) {
    let current = strings[i];
    while (current.indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1);
      if (prefix.length === 0) {
        return "";
      }
    }
  }
  return prefix;
}

// longestCommonPrefix(["flower", "flow", "flight"]);
// longestCommonPrefix(["dog", "racecar", "car"]);

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#longestCommonPrefix", () => {
    it("should return 'fl'", () => {
      expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
    });
    it("should return ''", () => {
      expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
    });
    it("should return 'do", () => {
      expect(longestCommonPrefix(["doog", "door", "doorbell"])).toEqual("doo");
    });
  });
}

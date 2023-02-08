/* 
Given two strings s and t, return true 
if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, typically 
using all the original letters exactly once.
*/

function isAnagram(s, t) {
  // lookup -> a:2, n: 1, g:1, r:1,m:1
  let lookup = {};
  for (let ltr of s) {
    lookup[ltr] ? (lookup[ltr] += 1) : (lookup[ltr] = 1);
  }
  //  loop through t -> if t[i] exist in the lookup
  for (let ltr of t) {
    if (ltr in lookup) {
      lookup[ltr]--;
    } else {
      return false;
    }
  }

  for (let ltr in lookup) {
    if (lookup[ltr] !== 0) return false;
  }

  return true;
}

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("ab", "a"));

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip("#isAnagram", () => {
    it("should return true", () => {
      expect(isAnagram("anagram", "nagaram")).toEqual(true);
    });
    it("should return false", () => {
      expect(isAnagram("rat", "car")).toEqual(false);
    });
    it("should return false", () => {
      expect(isAnagram("ab", "a")).toEqual(false);
    });
  });
}

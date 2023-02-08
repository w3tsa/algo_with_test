/* 
Given two strings needle and haystack, return the index of the first occurrence
of needle in haystack, or -1 if needle is not part of haystack.
*/

function strStr(needle, haystack) {
  return haystack.indexOf(needle);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  describe.skip('#strStr', () => {
    it('should return 0', () => {
      expect(strStr('sad', 'sadbutsad')).toEqual(0);
    });
    it('should return -1', () => {
      expect(strStr('leeto', 'leetcode')).toEqual(-1);
    });
  });
}

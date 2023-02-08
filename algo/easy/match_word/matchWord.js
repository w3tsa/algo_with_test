/* Given with the array of strings and a single string, we need to find whether among the string in the array if any one is present in the single input string as substring or scrambled substring
words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
string1 = 'tacbnihjs'
match_word(words, string1) -> cat
 */

export default function matchWord(words, string) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (string.includes(words[i]) || isScrambled(words[i], string)) {
      result.push(words[i]);
    }
  }
  return result;
}

function isScrambled(str1, str2) {
  let lookup = {};

  for (let i = 0; i < str2.length; i++) {
    let ltr = str2[i];
    lookup[ltr] ? (lookup[ltr] += 1) : (lookup[ltr] = 1);
  }

  for (let i = 0; i < str1.length; i++) {
    let ltr = str1[i];
    if (!lookup[ltr]) {
      return false;
    } else {
      lookup[ltr]--;
    }
  }

  for (let ltr of str2) {
    if (lookup[ltr] < 0) return false;
  }

  return true;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe.skip("matchWord", () => {
    it("should return array of the words match", () => {
      expect(matchWord(["cat", "baby", "bac"], "tacbnihjs")).toEqual([
        "cat",
        "bac",
      ]);
    });
    it("should return false", () => {
      expect(matchWord(["ttt", "aaaa", "sone"], "dasdasrre")).toEqual([]);
    });
    it("should return array of the words match", () => {
      expect(
        matchWord(["cat", "baby", "dog", "bird", "car", "ax"], "tacbnihjs")
      ).toEqual(["cat"]);
    });
    it("should return array of the words match", () => {
      expect(
        matchWord(["cat", "baby", "dog", "bird", "car", "ax"], "catbnihjs")
      ).toEqual(["cat"]);
    });
  });
}

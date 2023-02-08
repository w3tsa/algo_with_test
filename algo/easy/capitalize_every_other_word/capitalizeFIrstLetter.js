/* 
    write a function that accepts a string as an argument.
    the function should capitalize ONLY every other letter in 
    the string.
    
    The function should then return the converted string.
*/

function capitalizeFIrstLetter(str) {
  if (!str) return "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

// console.log(capitalizeFIrstLetter("hello"));

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#capitalizeFIrstLetter", () => {
    it("should return 'HeLlO", () => {
      expect(capitalizeFIrstLetter("hello")).toEqual("HeLlO");
    });
    it("should return 'QuIcK'", () => {
      expect(capitalizeFIrstLetter("QUICK")).toEqual("QuIcK");
    });
    it("should return 'BrOwN'", () => {
      expect(capitalizeFIrstLetter("Brown")).toEqual("BrOwN");
    });
    it("should return ''", () => {
      expect(capitalizeFIrstLetter("")).toEqual("");
    });
    it("should return 'Yo eLi'", () => {
      expect(capitalizeFIrstLetter("yo eli")).toEqual("Yo eLi");
    });
  });
}

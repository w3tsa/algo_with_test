/* 
The first century spans from the year 1 up to and 
including the year 100. The Seccond - from the year 101
up to and including the year 200 etc...

Given a year, return the century it is in.
*/

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

// console.log(centuryFromYear(1701));
// console.log(centuryFromYear(1950));
// console.log(centuryFromYear(2000));

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#centuryFromYear", () => {
    it("should return 18", () => {
      expect(centuryFromYear(1705)).toEqual(18);
    });
    it("should return 19", () => {
      expect(centuryFromYear(1900)).toEqual(19);
    });
    it("should return 17", () => {
      expect(centuryFromYear(1601)).toEqual(17);
    });
    it("should return 20", () => {
      expect(centuryFromYear(2000)).toEqual(20);
    });
    it("should return 20", () => {
      expect(centuryFromYear(1950)).toEqual(20);
    });
  });
}

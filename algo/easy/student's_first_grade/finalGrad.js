/* 
create a funtion finalGrade, which calculates the final grade of a student 
depending on two parameters: a grade for the exam and a number of completed
projects.

This function should take two arguments: exam grade from(0-100); projects: numbers of 
projects completed;

should return final grades:
100: more than 90 and projects are more than 10
90: more than 75 and if a numbers of completed project is minimum 5
75: more than 50 and if a numbers of completed project is minimum 2
0: in other cases

*/

function finalGrade(grade, projects) {
  switch (true) {
    case grade > 90 || projects > 10:
      // console.log(grade > 50 && projects >= 2);
      return 100;
    case grade > 75 && projects >= 5:
      return 90;
    case grade > 50 && projects >= 2:
      return 75;
    default:
      return 0;
  }
}

// console.log(finalGrade(55, 3));

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip('#finalGrade', () => {
    it('should return 100', () => {
      expect(finalGrade(100, 12)).toEqual(100);
    });
    it('should return 100', () => {
      expect(finalGrade(99, 0)).toEqual(100);
    });
    it('should return 90', () => {
      expect(finalGrade(85, 5)).toEqual(90);
    });
    it('should return 75', () => {
      expect(finalGrade(55, 3)).toEqual(75);
    });
    it('should return 0', () => {
      expect(finalGrade(55, 0)).toEqual(0);
    });
    it('should return 0', () => {
      expect(finalGrade(20, 2)).toEqual(0);
    });
  });
}

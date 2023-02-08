/* 

*/

function buildRobot(allParts, requiredParts) {
  let map = {};
  let set = new Set();
  for (let i = 0; i < allParts.length; i++) {
    let key = allParts[i].split("_")[0];
    let val = allParts[i].split("_")[1];
    map[key] ? map[key].push(val) : (map[key] = [val]);
  }

  let parts = requiredParts.split(",");

  for (let props in map) {
    for (let item of parts) {
      if (map[props].indexOf(item) > -1) {
        set.add(props);
      } else {
        set.delete(props);
      }
    }
  }

  return Array.from(set);
}

let availableParts = [
  "Rosie_arm",
  "Rosie_head",
  "Rosie_leg",
  "Rosie_claw",
  "Bender_arm",
  "Bender_leg",
  "Bender_head",
];
let requiredParts1 = "arm,leg,head";
let requiredParts2 = "arm,leg,head,claw";
let requiredParts3 = "arm,leg,head,claw,hand";

// console.log(buildRobot(availableParts, requiredParts1));
// console.log(buildRobot(availableParts, requiredParts2));
// console.log(buildRobot(availableParts, requiredParts3));

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe.skip("#buildRobot", () => {
    it("should return ['Rosie', 'Bender']", () => {
      expect(buildRobot(availableParts, requiredParts1)).toEqual([
        "Rosie",
        "Bender",
      ]);
    });
    it("should return ['Rosie', 'Bender']", () => {
      expect(buildRobot(availableParts, requiredParts2)).toEqual(["Rosie"]);
    });
    it("should return []", () => {
      expect(buildRobot(availableParts, requiredParts3)).toEqual([]);
    });
  });
}

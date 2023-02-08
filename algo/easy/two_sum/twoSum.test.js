import { describe, expect, it } from "vitest";
import twoSum from "./twoSum";

describe.skip("#twoSum", () => {
  it("should return [0,1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it("should return [1,2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it("should return [0,1]", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
  it("should return null", () => {
    expect(twoSum([1, 3, 3], 13)).toEqual(null);
  });
});

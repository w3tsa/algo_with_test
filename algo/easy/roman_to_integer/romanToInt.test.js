import { describe, expect, it } from "vitest";
import romanToInt from "./romanToInt";

describe.skip("#romanToInt", () => {
  it("shold return 3", () => {
    expect(romanToInt("III")).toEqual(3);
  });
  it("shold return 58", () => {
    expect(romanToInt("LVIII")).toEqual(58);
  });
  it("shold return 1994", () => {
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  });
});

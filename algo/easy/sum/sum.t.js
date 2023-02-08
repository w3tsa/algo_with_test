import { describe, expect, it } from "vitest";
import sum from "./sum";

describe.skip("greeting", () => {
  it("returns a string", () => {
    expect(sum("Rahim")).toBe("Hi Rahim");
  });
});

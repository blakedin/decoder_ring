// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Thinkful", () => {
  describe("error handling", () => {
    it("should return false if shift is zero", () => {
      const message = "Blake Dinwiddie";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if shift amount is larger than 25", () => {
      const message = "Blake Dinwiddie";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if shift amount is less than -25", () => {
      const message = "Blake Dinwiddie";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("if encode === true", () => {
    it("should encode message by shift amount", () => {
      const message = "Rob Zombie";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "spc apncjf";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces and symbols intact", () => {
      const message = "Rob Zombie!";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "spc apncjf!";

      expect(actual).to.equal(expected);
    });

    it("should make everything lowercase", () => {
      const message = "ROB ZOMBie";
      const shift = 1;
      const actual = caesar(message, shift);
      const expected = "spc apncjf";

      expect(actual).to.equal(expected);
    });

    it("should hanlde shift values that cause shift to outside the boundries of the alphabet and wrap around to the beginning.", () => {
      const message = "ZZ Top is my favorite band";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "cc wrs lv pb idyrulwh edqg";

      expect(actual).to.equal(expected);
    });

    it("should shift to the left with negative number", () => {
      const message = "Bjork";
      const shift = -1;
      const actual = caesar(message, shift);
      const expected = "ainqj";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode message in opposite direction", () => {
      const message = "ainqj";
      const shift = -1;
      const actual = caesar(message, shift, false);
      const expected = "bjork";

      expect(actual).to.equal(expected);
    });

    it("should leave sepaces and characters", () => {
      const message = "spc apncjf!";
      const shift = 1;
      const actual = caesar(message, shift, false);
      const expected = "rob zombie!";

      expect(actual).to.equal(expected);
    });

    it("should disregard capital letters", () => {
      const message = "SPC APNCJF!";
      const shift = 1;
      const actual = caesar(message, shift, false);
      const expected = "rob zombie!";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "spc apncjf";
      const shift = 1;
      const actual = caesar(message, shift, false);
      const expected = "rob zombie";

      expect(actual).to.equal(expected);
    });

    it("should allow for negative shift", () => {
      const message = "ainqj";
      const shift = -1;
      const actual = caesar(message, shift, false);
      const expected = "bjork";

      expect(actual).to.equal(expected);
    });
  });
});

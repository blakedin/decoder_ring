// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests", () => {
  describe("encoding a message", () => {
    it("should encode message by number pairs", () => {
      const message = "blake";
      const actual = polybius(message);
      const expected = "2113115251";

      expect(actual).to.equal(expected);
    });

    it("should encode i and or j as 42", () => {
      const message = "juicy j";
      const actual = polybius(message);
      const expected = "4254423145 42";
      expect(actual).to.equal(expected);
    });

    it("should leave spaces", () => {
      const message = "juicy j";
      const actual = polybius(message);
      const expected = "4254423145 42";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode string by encoding each letter into number pairs", () => {
      const message = "4254423145 42";
      const actual = polybius(message, false);
      const expected = "i/ji/jui/ji/jcyi/j i/j";

      expect(actual).to.equal(expected);
    });

    it("should turn 42 into i/j", () => {
      const message = "4254423145 42";
      const actual = polybius(message, false);
      console.log(actual);
      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "4254423145 42";
      const actual = polybius(message, false);
      const expected = "i/ji/jui/ji/jcyi/j i/j";

      expect(actual).to.equal(expected);
    });

    it("should return false if string length is odd", () => {
      const message = "123 567894";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});

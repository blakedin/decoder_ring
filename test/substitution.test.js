// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substituion tests", () => {
  describe("errors", () => {
    it("should return false if there is no alphabet provided", () => {
      const message = "tetsuo";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if alphabet isn't 26 characters long", () => {
      const message = "tetsuo";
      const alphabet = "a";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if alphabet contains duplicates", () => {
      const message = "tetsuo";
      const alphabet = "aaaaaaa";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode a message", () => {
      const message = "back to the future was a weird movie";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "lpmh dc djk nzdzxk spr p skbxo ycebk";

      expect(actual).to.equal(expected);
    });

    it("should work when fed unique characters", () => {
      const message = "message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "ysii.rs";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "my milkshake";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "yp yxcfid.fs";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode message", () => {
      const message = "yp yxcfid.fs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "my milkshake";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "yp yxcfid.fs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "my milkshake";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces", () => {
      const message = "yp yxcfid.fs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "my milkshake";

      expect(actual).to.equal(expected);
    });
  });
});

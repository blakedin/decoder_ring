// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const alphabet_map = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    };

    if (!alphabet) return false;

    if (alphabet.length < 26 || alphabet.length > 26) return false;

    const duplicates = alphabet
      .split("")
      .filter((char, _, dupes) => char === dupes.pop());

    if (duplicates.length) return false;

    let result = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += " ";
        } else {
          result += alphabet[alphabet_map[input[i]]];
        }
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += " ";
        } else {
          const index = alphabet.indexOf(input[i]);
          result += Object.keys(alphabet_map).find(
            (key) => alphabet_map[key] === index
          );
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

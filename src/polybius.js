// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //your solution code here
    const polybius_map = {
      a: { row: 1, col: 1, 11: "a" },
      b: { row: 1, col: 2, 21: "b" },
      c: { row: 1, col: 3, 31: "c" },
      d: { row: 1, col: 4, 41: "d" },
      e: { row: 1, col: 5, 51: "e" },
      f: { row: 2, col: 1, 12: "f" },
      g: { row: 2, col: 2, 22: "g" },
      h: { row: 2, col: 3, 32: "h" },
      i: { row: 2, col: 4, 42: "i/j" },
      j: { row: 2, col: 4, 42: "i/j" },
      k: { row: 2, col: 5, 52: "k" },
      l: { row: 3, col: 1, 13: "l" },
      m: { row: 3, col: 2, 23: "m" },
      n: { row: 3, col: 3, 33: "n" },
      o: { row: 3, col: 4, 43: "o" },
      p: { row: 3, col: 5, 53: "p" },
      q: { row: 4, col: 1, 14: "q" },
      r: { row: 4, col: 2, 24: "r" },
      s: { row: 4, col: 3, 34: "s" },
      t: { row: 4, col: 4, 44: "t" },
      u: { row: 4, col: 5, 54: "u" },
      v: { row: 5, col: 1, 15: "v" },
      w: { row: 5, col: 2, 25: "w" },
      x: { row: 5, col: 3, 35: "x" },
      y: { row: 5, col: 4, 45: "y" },
      z: { row: 5, col: 5, 55: "z" },
    };
    const stack = [];
    if (!encode) {
      let space_index = null;
      const num_array = input.split("").filter((num, i) => {
        if (num === " ") space_index = i;
        if (num !== " ") return num;
      });
      if (num_array.length % 2 !== 0) return false;
      let result = [];
      for (let i = 0; i < num_array.length; i++) {
        if (i % 2 === 0) {
          for (const letter in polybius_map) {
            const search_string = `${num_array[i]}${num_array[i + 1]}`;
            if (polybius_map[letter][search_string]) {
              result.push(polybius_map[letter][search_string]);
            }
          }
        }
      }
      if (space_index) {
        result.splice(space_index - 2, 0, " ");
      }
      stack.push(result.join(""));
      return stack[0];
    } else {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          stack.push(input[i]);
        } else {
          if (polybius_map[input[i]]) {
            stack.push(polybius_map[input[i]].col, polybius_map[input[i]].row);
          }
        }
      }
      return stack.join("");
    }
    //return stack.length > 1 ? `${stack[0]} ${stack[1]}` : stack[0];
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

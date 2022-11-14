// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift > 25 || shift < -25) return false;

    let result = "";
    const zValue = 122;
    const aValue = 97;
    let charCode = 0;

    input.split("").forEach((char) => {
      const is_character = /[a-zA-Z]/.test(char);
      if (is_character) {
        if (encode) {
          charCode = char.toLowerCase().charCodeAt(0) + shift;
          if (charCode > zValue) charCode = charCode - zValue + aValue - 1;

          if (shift < 0 && charCode < aValue)
            charCode = zValue - (aValue - charCode) + 1;
          result += String.fromCharCode(charCode);
        } else {
          charCode = char.toLowerCase().charCodeAt(0) - shift;

          if (charCode < aValue)
            charCode = zValue - Math.abs(aValue - charCode) + 1;
          if (charCode > zValue) charCode = charCode - zValue + aValue - 1;
          result += String.fromCharCode(charCode);
        }
      } else {
        result += char;
      }
    });
    console.log(result);
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

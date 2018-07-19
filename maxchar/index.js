// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1
  }
  let mostFrequentChar = ''
  Object.keys(chars)
    .reduce((max, char) => {
      if (max < chars[char]) {
        max = chars[char]
        mostFrequentChar = char
      }
      return max
    }, 0)
  return mostFrequentChar
}

module.exports = maxChar;

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagramsSet(stringA, stringB) { //FIXME: fix using set
  const resolveMatch = (str1, str2) => {
    const chars1 = new Set(str1.replace(/[\W]/g, '').split(''))
    const chars2 = new Set(str2.replace(/[\W]/g, '').split(''))
    return [...chars1].filter((letter) => chars2.has(letter)).length === chars2.size
  }
  return resolveMatch(stringA, stringB)

}

function anagramsTop (stringA, stringB) {
  const resolveStr = (str) => {
    return str
      .replace(/[\W]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  }
  return resolveStr(stringA) === resolveStr(stringB)
}

function anagrams(stringA, stringB) {
  function buildCharMap (str) {
    let charMap = {}
    for (let char of str.replace(/[\W]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1
    }
    return charMap

  }
  const charMapA = buildCharMap(stringA)
  const charMapB = buildCharMap(stringB)

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false
  else {
    for (let char in charMapA) {
      if (charMapA[char] !== charMapB[char]) return false
    }
    return true
  }
}

module.exports = anagramsTop;

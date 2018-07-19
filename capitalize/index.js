// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const capitalizeInner = (word) => {
    const head = word[0].toUpperCase()
    return head + word.split('').slice(1).join('')
  }
  return str
    .split(' ')
    .map(word => capitalizeInner(word))
    .join(' ')
}

// function capitalize(str) {
//   let res = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if(str[ i-1 ] === ' ') res += str[i].toUpperCase()
//     else res += str[i]
//   }
//   return res
// }

module.exports = capitalize;

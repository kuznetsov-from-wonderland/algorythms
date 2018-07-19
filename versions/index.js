// GET MAX VALID VERSION

// getVersion('1.1'); // → 1.1.190
// getVersion('1.1.7'); // → 1.1.7
// getVersion('1.2'); // → 1.22.3
// getVersion('1.'); // → 1.3.7

// TODO: move data to tests file

versions = [
  '1.0.0',
  '1.1.5',
  '1.1.7',
  '1.1.90',
  '1.2.0',
  '1.2.2',
  '3.5.2',
  '1.2.23',
  '1.22.3',
  '1.2.5',
  '1.3.0',
  '1.1.50',
  '1.1.190',
  '1.30.7'
]


// define max index in versionOptions array
const maxLengthVersion = versions
.reduce((acc, currentValue) => {
 const length = currentValue.split('.').length
 if(length > acc) return length
  else return acc
}, 0)

// for version type like '1.1.2' will return [100, 10, 1]
const versionOptions = Array
.from(new Array(maxLengthVersion),(val,idx) => idx)
.map((item, idx) => Math.pow(10,maxLengthVersion - idx))

// processes version as string to version as a number
// one to one correspondence
const max = (str) => {
return str
 .split('.')
  .reduce((acc, currentValue, currentIndex) => {
   return acc + currentValue * versionOptions[currentIndex]
}, 0)
}


function getVersion( ver ) {

const size = ver.length

let verFiltered = versions
  .filter(version => version.substring(0, size) === ver)

const verProcessed = verFiltered.map(version => max(version))


const indexOfMax =
  verProcessed.indexOf(Math.max.apply(Math,verProcessed))

//  console.log(`${ver} // => ${verFiltered[indexOfMax]}`)
 return verFiltered[indexOfMax] || ''

}

module.exports = getVersion;


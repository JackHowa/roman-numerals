
// make a conversion key with arabic to roman
var traditionRomans = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};

function convertToRoman(num) {
  return findHighestMultiple(num);
}

// find greatest multiple for iterating over 
function findHighestMultiple(num) {
  return romanValues().find(arabicNum => arabicNum <= num);
}

// returns all of the values of tradition romans
// object.values is not supported by most browsers nor node
function romanValues() {
  return Object.keys(traditionRomans).map(function(key) {
    return traditionRomans[key];
  });
}

console.log(convertToRoman(36));

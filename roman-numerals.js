
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
  var totalOutput = "";

  while (num > 0) {
    totalOutput += addNumerals(num)
    num %= findHighestMultiple(num);
  }

  return totalOutput;
}

function addNumerals(num) {
  var letterOutput = '';
  for (var i = 0; i < findMultipleOccurence(num); i++) {
    letterOutput += findRoman(num);
  }
  return letterOutput;
}

function findRoman(num) {
  var highestMultiple = findHighestMultiple(num);

  return Object.keys(traditionRomans).find(key =>     traditionRomans[key] === highestMultiple);
}

function findMultipleOccurence(num) {
  return Math.floor(num / findHighestMultiple(num));
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

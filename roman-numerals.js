
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
 console.log(findClosestNumeral(num));
}

function findClosestNumeral(arabicNum) {
  // returns all of the values of tradition romans
  // object.values is not supported by most browsers nor node 
  return Object.keys(traditionRomans).map(function(key) {
    return traditionRomans[key];
  });
}

convertToRoman(36);

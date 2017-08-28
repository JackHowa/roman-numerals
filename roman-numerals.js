
// make a conversion key with arabic to roman
// will use keys and values with dictionary
var romanConversion = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

// input number like 34
// output XXXIV
function convertToRoman(num) {
  // set output for the whole number
  var romanOutput = "";

  // loop through while condition is true
  // the input could be zero or below so
  // wouldn't even want to run once using do while if so
  while (num > 0) {

    // use add numerals for each letter each time num
    // runs through the while loop
    romanOutput += addNumerals(num);

    // num is the remainder of what's left in num
    // modulo equals sign ensures num will go through
    // while loop again accurately
    num %= findHighestMultiple(num);
  }

  // return output for whole number
  return romanOutput;
}

// not using output as a variable here because
// want to keep the functions not dependent on state
function addNumerals(num) {

  // set total output for each letter
  var letterOutput = "";

  // i would run four times making iiii if num is 4
  // find multiple occurence is how many times current number goes into roman number conversion
  for (var i = 0; i < findMultipleOccurence(num); i++) {
    letterOutput += findRoman(num);
  }

  // output for each letter
  return letterOutput;
}

function findRoman(num) {

  // roman conversion table keys are the arabic nums
  // find gives me the first highest number because the dictionary is in descending order
  return Object.keys(romanConversion).find(key => romanConversion[key] === findHighestMultiple(num));
}


// find greatest multiple for iterating over
// 110 would find 100 as the highest number
function findHighestMultiple(num) {
  return romanValues().find(arabicNum => arabicNum <= num);
}

// figure out how many times match multiple 30 goes into highest multiple like 10
// would need to thereby iterate 3 times
function findMultipleOccurence(num) {
  return Math.floor(num / findHighestMultiple(num));
}

// returns all of the values of tradition romans
// object.values is not supported by most browsers nor node
function romanValues() {
  return Object.keys(romanConversion).map(function(key) {
    return romanConversion[key];
  });
}

console.log(convertToRoman(34));

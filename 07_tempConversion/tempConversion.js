const convertToCelsius = function(fheitTemp) {
  let rawCelsius = (fheitTemp - 32) * 5/9;
  var multiplier = Math.pow(10, 1 || 0);
  let trueCelsius = Math.round(rawCelsius * multiplier) / multiplier;
  return trueCelsius;
};

const convertToFahrenheit = function(celTemp) {
  let rawFahrenheit = ((celTemp * 9/5) + 32);
  var multiplier = Math.pow(10, 1 || 0);
  let trueFahrenheit = Math.round(rawFahrenheit * multiplier) / multiplier;
  return trueFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// function round(value, precision) {
//   var multiplier = Math.pow(10, precision || 0);
//   return Math.round(value * multiplier) / multiplier;
// }


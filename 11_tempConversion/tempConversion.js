const convertToCelsius = function(fahrenheitTemp) {
  let celsius = (fahrenheitTemp - 32) * (5/9);
  let rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheit = (celsiusTemp * (9/5)) + 32;
  let rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

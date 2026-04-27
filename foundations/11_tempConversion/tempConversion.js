const convertToCelsius = function(temperature) {
  let celsiusTemperature = (temperature-32)*(5/9);
  return Math.round(celsiusTemperature*10)/10;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheitTemperature = ((9/5)*temperature)+32;
  return Math.round(fahrenheitTemperature*10)/10;
};
convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

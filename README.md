# weather-cli
fetch current weather by zip-code from the command line.

## under the hood
uses the [dark sky api](), [google geocode api](), and [chalk]() (for colored output). 

## usage
`npm i -g ` this package

edit `config.js` to add your own api keys and set temperature and chance of precipitation thresholds.

`temp_threshold > current_temp` prints blue
`temp_threshold < current_temp` prints red
`precip_threshold > precip_probability` prints yellow
`precip_threshold < precip_probability` prints cyan

once you're all set:
`weather-cli 90210 // fetch weather for zip-code 90210`

## Todo
[ ] add ability to search by more than just zipcode.

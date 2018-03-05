#!/usr/bin/env node

const chalk = require('chalk')
const { precip_threshold, temp_threshold } = require('./config')

const argv = require('minimist')(process.argv.slice(2))
const location = argv._[0]

const getGeoCode = require('./lib/getGeoCode')
const getWeather = require('./lib/getWeather')

const HOT = chalk.red.bold
const COLD = chalk.blue.bold
const WET = chalk.cyan.bold
const DRY = chalk.yellow.bold
const SUMMARY = chalk.green.bold

getGeoCode(location)
  .then(getWeather)
  .then(res =>
    console.log(`
    - Right now it's: ${WET(res.summary)} -
    - Current Actual Temp (F): ${
      res.temperature > temp_threshold
        ? HOT(res.temperature)
        : COLD(res.temperature)
    } -
    - Real Feel Temp (F): ${
      res.apparentTemperature > temp_threshold
        ? HOT(res.apparentTemperature)
        : COLD(res.apparentTemperature)
    } -
    - Precipitation Chance (%): ${
      res.precipProbability > precip_threshold
        ? WET(res.precipProbability)
        : DRY(res.precipProbability)
    } -
  `)
  )

const fetch = require('node-fetch')

const DARK_SKY_API = require('../config').DARK_SKY_API

function getWeather(location) {
  if (!location.lat || !location.lng) {
    throw new Error(
      `There was an error parsing your address. Please double check that you passed a valid address.`
    )
  }
  const { lat, lng } = location
  const base_url = `https://api.darksky.net/forecast/${DARK_SKY_API}`
  return fetch(`${base_url}/${lat},${lng}`)
    .then(res => res.json())
    .then(res => res.currently)
    .catch(err => console.log(`There was an error fetching the weather.`))
}

module.exports = getWeather

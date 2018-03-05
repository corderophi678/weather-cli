const fetch = require('node-fetch')

const DARK_SKY_API = require('../config').DARK_SKY_API

function getWeather(location) {
  const { lat, lng } = location
  const base_url = `https://api.darksky.net/forecast/${DARK_SKY_API}`
  return fetch(`${base_url}/${lat},${lng}`).then(res => res.json()).then(res => res.currently)
}

module.exports = getWeather

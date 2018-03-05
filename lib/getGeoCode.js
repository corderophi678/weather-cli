const fetch = require('node-fetch')

const GEOCODE_API = require('../config').GEOCODE_API

function getGeoCode(location) {
  const GEOCODE_URI = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GEOCODE_API}`
  return fetch(GEOCODE_URI)
    .then(response => response.json())
    .then(res => {
      if (!res.results || !res.results[0] || !res.results[0].geometry) {
        throw new Error(`${location} isn't a valid address.`)
      } else {
        return res.results[0].geometry.location
      }
    })
    .catch(err => console.log(`${location} is not a valid address.`))
}

module.exports = getGeoCode

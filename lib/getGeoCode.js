const fetch = require('node-fetch')

const GEOCODE_API = require('../config').GEOCODE_API

function getGeoCode(location) {
  const GEOCODE_URI = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GEOCODE_API}`
  return fetch(GEOCODE_URI).then(response => response.json()).then(res => res.results[0].geometry.location)
}

module.exports = getGeoCode

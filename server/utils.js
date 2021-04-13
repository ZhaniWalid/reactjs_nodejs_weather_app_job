const url = require('url');
const config = require('./config');

module.exports = {
  generateWebAppURL: function(locationConfigType, locationConfigData) {
    const baseUrlConfig = config.baseUrl;
    const APIkey = config.APIkey;
    const queryConfig = config.query;

    //  requestQuery => Example how to get Data from the End-Point URL of the Weather API:
    //  http://api.openweathermap.org/data/2.5/weather?q={cityName}&units=metric&appid={APIkey}
    //  'units=metric' => To get the Temperature in °C
    let requestQuery = { units: 'metric', appid: APIkey };

    if (locationConfigType !== 'coordinates') {
      requestQuery[queryConfig[locationConfigType]] = locationConfigData;
    } else {
      if (locationConfigData.latitude) {
        requestQuery[queryConfig.coordinates.latitude] = locationConfigData.latitude;
      }

      if (locationConfigData.longitude) {
        requestQuery[queryConfig.coordinates.longitude] = locationConfigData.longitude;
      }
    }

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: requestQuery
    });
  }
};
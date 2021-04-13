module.exports = {
    baseUrl: {
      protocol: 'http',
      hostname: 'api.openweathermap.org',
      path: '/data/2.5/weather'
    },
  
    /* query: {
      name: 'q',
      id: 'id',
      coordinates: {
        latitude: 'lat',
        longitude: 'lon'
      },
      zipcode: 'zip'
    }, */

    query: {
      name: 'q'
    },
  
    APIkey: 'Yours Open Weather Map API Key'
};
const fetch = require('node-fetch');
const generateWebAppURL = require('../../../server/utils').generateWebAppURL;
const { msNodeSqlSrvCnxInsertData } = require('../../mssql');

module.exports = (app) => {

  app.post('/search-location-weather', (req, res) => {
    const requestBody = req.body;
    const apiUrl = generateWebAppURL(requestBody.locationType, requestBody.locationData);
    console.log('apiUrl: ', apiUrl);

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
        console.log('Response Data from Back-End NodeJS/Express Server & Open Weather Map API:\n ', data);
        
        var JSONData = data;
        console.log('**********Extracted Data of Weather Location: ', String(JSONData.name),'**********');
        console.log('WeatherId: ', parseInt(JSONData.weather[0].id));
        console.log('WeatherLocation: ', String(JSONData.name));
        console.log('WeatherMainState: ', String(JSONData.weather[0].main));
        console.log('WeatherDescription: ', String(JSONData.weather[0].description));
        console.log('WeatherTemperature: ', parseFloat(JSONData.main.temp));
        console.log('WeatherHumidity: ', parseInt(JSONData.main.humidity));
        console.log('WeatherWindSpeed: ', parseFloat((JSONData.wind.speed * 1.609344).toFixed(2))); // Convert from mph to km/h
        console.log('*****************************************************************');

        var weatherObj = {
          weatherId: parseInt(JSONData.weather[0].id),
          weatherLocation: String(JSONData.name),
          weatherMainState: String(JSONData.weather[0].main),
          weatherDescription: String(JSONData.weather[0].description),
          weatherTemperature: parseFloat(JSONData.main.temp),
          weatherHumidity: parseInt(JSONData.main.humidity),
          weatherWindSpeed: parseFloat((JSONData.wind.speed * 1.609344).toFixed(2)) // Convert from mph to km/h
        };
        console.log('weatherObj: ', weatherObj);

        // Connect to the db with Microsft SQL Server (MSSQL) & Insert Data
        msNodeSqlSrvCnxInsertData(
          weatherObj.weatherId, 
          weatherObj.weatherLocation, 
          weatherObj.weatherMainState, 
          weatherObj.weatherDescription, 
          weatherObj.weatherTemperature, 
          weatherObj.weatherHumidity, 
          weatherObj.weatherWindSpeed
        );
          
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
};
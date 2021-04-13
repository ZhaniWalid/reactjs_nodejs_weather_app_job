require('module-alias/register');

const fs = require('fs');

// Handle all the routes under '/api' folder like our route '/search-location-weather'
// ...in the [SearchLocation.js] file and exporting them
module.exports = (app) => {
  // Require all API endpoints
  // - The 'fs.readdirSync' block of code finds and loops through all of the files in the '/routes/api' folder,
  // - ...and for each file it finds, it requires it. 
  // - ...This is important as it allows us to export all of the routes found in the '/routes/api' directory
  fs.readdirSync(`${__dirname}/api/`).forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};
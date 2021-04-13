// Connection to Database using Microsft SQL Server (MSSQL)
module.exports = {
    // Connect to the db with Microsft SQL Server (MSSQL) & Retrieve Data
    msNodeSqlServerConnection: function() {
        const sql = require('mssql/msnodesqlv8');
        
        const sqlCnxPool = new sql.ConnectionPool({
            database: 'Yours MSSQL db',
            server: 'Yours MSSQL Server Name',
            driver: 'msnodesqlv8',
            options: {
                trustedConnection: true
            }
        });

        var sqlFetchDataQuery = 'SELECT * FROM WeatherInformations;';
        sqlCnxPool.connect().then(() => {
            // Simple 'SELECT' query
            console.log('sqlFetchDataQuery: ', sqlFetchDataQuery);           
            sqlCnxPool.request().query(sqlFetchDataQuery, (err, result) => {
                if (err) {
                    console.log('Microsoft SQL Server - MSSQL - sqlFetchDataQuery - Error: ', err);
                }else {
                    console.log('Microsoft SQL Server - MSSQL - sqlFetchDataQuery - Success: ', result);
                }            
            });
        });
    },
    // Connect to the db with Microsft SQL Server (MSSQL) & Insert Data
    msNodeSqlSrvCnxInsertData: function(weatherId, weatherLocation, weatherMainState, weatherDescription, weatherTemperature, weatherHumidity, weatherWindSpeed) {
        const sql = require('mssql/msnodesqlv8');
        
        const sqlCnxPool = new sql.ConnectionPool({
            database: 'Yours MSSQL db',
            server: 'Yours MSSQL Server Name',
            driver: 'msnodesqlv8',
            options: {
                trustedConnection: true
            }
        });
        
        var inputWeatherObj = {
            weatherIdInput: parseInt(weatherId),
            weatherLocationInput: String(weatherLocation),
            weatherMainStateInput: String(weatherMainState),
            weatherDescriptionInput: String(weatherDescription),
            weatherTemperatureInput: parseFloat(weatherTemperature),
            weatherHumidityInput: parseInt(weatherHumidity),
            weatherWindSpeedInput: parseFloat(weatherWindSpeed)
        };

        var sqlInsertDataQuery = ("INSERT INTO WeatherInformations ("
            +"WeatherId, WeatherLocation, WeatherMainState, WeatherDescription, WeatherTemperature, "
            +"WeatherHumidity, WeatherWindSpeed"
            +") VALUES ("
            + inputWeatherObj.weatherIdInput+ ", "
            + "'"+inputWeatherObj.weatherLocationInput + "', "
            + "'"+inputWeatherObj.weatherMainStateInput + "', "
            + "'"+inputWeatherObj.weatherDescriptionInput + "', "
            + inputWeatherObj.weatherTemperatureInput + ", "
            + inputWeatherObj.weatherHumidityInput + ", "
            + inputWeatherObj.weatherWindSpeedInput +
        ");");
        sqlCnxPool.connect().then(() => {
            // Simple 'INSERT' query
            console.log('sqlInsertDataQuery: ', sqlInsertDataQuery);
            sqlCnxPool.request().query(sqlInsertDataQuery, (err, result) => {
                if (err) {
                    console.log('Microsoft SQL Server - MSSQL - sqlInsertDataQuery - Error: ', err);
                }else {
                    console.log('Microsoft SQL Server - MSSQL - sqlInsertDataQuery- Success: ', result);
                }            
            });
        });
    }
}
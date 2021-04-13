const express = require('express');
const { msNodeSqlServerConnection } = require('./mssql');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes directory
// - 'require('./routes)(app)' is going to import the '/routes' folder that contains our 'index.js'
require('./routes')(app);

app.get('/', (req, res) => {
  // res.send('PORT 5000');
  res.send('Hello World from NodeJS/Express Back-End Server!');
  msNodeSqlServerConnection(); // Connect to the db with Microsft SQL Server (MSSQL) & Retrieve Data
});

app.listen(port, (err) => {
  if(err) { console.log(err) };
  console.log(`App is listening at http://localhost:${port}`);
});
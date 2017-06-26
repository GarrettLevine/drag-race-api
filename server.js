const express = require(`express`);
const bodyParser = require(`body-parser`);
const router = require(`./router/index.js`)

'use strict';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-type, Authorization, Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = process.env.PORT || 8080;

app.use(`/api`, router);

app.listen(port)
console.log(`App is running on port ${port}`);

const express = require(`express`);
const bodyParser = require(`body-parser`);
const router = require(`./router/index.js`)
const { rateLimit } = require('./middleware/')

'use strict';


const app = express();

app.enable('trust proxy');

app.use(rateLimit);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'content-type, Authorization, Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = process.env.PORT || 8080;

app.use(`/api`, router);
app.get('/', (req, res) => {
  res.redirect('https://github.com/GarrettLevine/drag-race-api');
})
app.get('/*', (req, res) => {
  res.status(400).json({ message: 'no route found.' });
});

app.listen(port)
console.log(`App is running on port ${port}`);

const express = require(`express`);
const Raven = require(`raven`);
const bodyParser = require(`body-parser`);

const router = require(`./router/index.js`)
const { rateLimit } = require('./middleware')

'use strict';

const app = express();
const port = process.env.PORT || 8080;

Raven.config(process.env.DR_API_RAVEN_DNS).install();
app.use(Raven.requestHandler());

app.enable('trust proxy');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-type, Authorization, Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(rateLimit);

app.use(`/api`, router);
app.get('/', (req, res) => {
  res.status(301).redirect('https://drag-race-api.readme.io/docs');
})
app.use(Raven.errorHandler());
app.get('/*', (req, res) => {
  res.status(400).json({ message: 'no route found.' });
});

app.listen(port)
console.log(`App is running on port ${port}`);

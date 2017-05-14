const express = require(`express`);
const bodyParser = require(`body-parser`);
const router = require(`./router/index.js`)

'use strict';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use(`/api`, router);

app.listen(port)
console.log(`App is running on port ${port}`);

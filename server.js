const path = require('path');
const express = require(`express`);
const Raven = require(`raven`);
const bodyParser = require(`body-parser`);

<<<<<<< HEAD
const { apiRouter } = require(`router`);
const { rateLimit } = require(`middleware`)

const app = express();
const port = process.env.PORT || 3000;
=======
const router = require(`./router/index.js`)
const {
  rateLimit,
  cors,
} = require('./middleware')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors);
Raven.config(process.env.DR_API_RAVEN_DNS).install();
app.use(Raven.requestHandler());
>>>>>>> 4a68eb90f0ec5de2e270ddcb73b8766fc63bd38a

app.enable(`trust proxy`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
<<<<<<< HEAD
app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
  next();
});
=======
// Enable CORS
>>>>>>> 4a68eb90f0ec5de2e270ddcb73b8766fc63bd38a
app.use(rateLimit);

app.use(express.static('public'));
app.use(`/api`, apiRouter);

<<<<<<< HEAD
app.get(`*`, (req, res, next) => res.sendFile(path.resolve(`./public/index.html`)));

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})
=======
app.use(Raven.errorHandler());
app.listen(port)
console.log(`App is running on port ${port}`);
>>>>>>> 4a68eb90f0ec5de2e270ddcb73b8766fc63bd38a

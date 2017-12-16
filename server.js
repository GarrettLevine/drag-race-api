const path = require('path');
const express = require(`express`);
const Raven = require(`raven`);
const bodyParser = require(`body-parser`);

const { apiRouter } = require(`router`);
const { rateLimit, cors } = require(`middleware`)

const app = express();
const port = process.env.PORT || 3000;

app.use(cors);
Raven.config(process.env.DR_API_RAVEN_DNS).install();
app.use(Raven.requestHandler());


app.enable(`trust proxy`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
  next();
});

app.use(rateLimit);
app.use(express.static('public'));
app.use(`/api`, apiRouter);

// comment these two routes out to start serving react bundle
app.get('/', (req, res) => {
  res.status(301).redirect('https://drag-race-api.readme.io/docs');
})
app.get('/*', (req, res) => {
  res.status(400).json({ message: 'no route found.' });
});
// uncomment this to serve react bundle
// app.get(`*`, (req, res, next) => res.sendFile(path.resolve(`./public/index.html`)));

app.use(Raven.errorHandler());
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

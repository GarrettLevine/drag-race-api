const path = require('path');
const express = require(`express`);
const bodyParser = require(`body-parser`);

const { apiRouter } = require(`router`);
const { rateLimit } = require(`middleware`)

const app = express();
const port = process.env.PORT || 8080;

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

app.get(`*`, (req, res, next) => res.sendFile(path.resolve(`./public/index.html`)));

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})

const path = require('path');
const fs = require('fs');
const express = require(`express`);
const Raven = require(`raven`);
const bodyParser = require(`body-parser`);

const { apiRouter } = require(`router`);
const { cors } = require(`middleware`)

const app = express();
const port = process.env.PORT || 8080;
// const accessKey = process.env.ACCESS_KEY;
const internalServerError = { "message": "internal server error"};
app.use(cors);

if (process.env.NODE_ENV !== 'development') {
  Raven.config(process.env.DR_API_RAVEN_DNS).install();
  app.use(Raven.requestHandler());
}

app.enable(`trust proxy`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
  next();
});

// app.use((req, res, next) => {
//   console.log('test');
//   // if access key is provided, skip rate-limiting
//   if (req.query.key = accessKey) {
//     next();
//   }
//   console.log('test test');
//   return rateLimit
// });

app.get('/test', (req, res) => {
  console.log('wow');
  res.send({ test: 'test '});
})
// app.use(express.static('public'));

app.use(`/api`, apiRouter);
app.use('/images/:queen', ({ params }, res, next) => {
  const imagePath = path.resolve(`./images/${params.queen}`);
  fs.access(imagePath, (err) => {
    if (err) {
      res.status(404).json({ message: `${params.queen} does not exist.` })
      return;
    }

    res.sendFile(imagePath, (err) => {
      if (err) res.status(500).json(internalServerError);
    });
  });
});

app.get('/*', (req, res) => {
  res.status(301).redirect("https://drag-race-api.readme.io/docs")
  // res.status(400).json({ message: 'no route found.' });
});
// uncomment this to serve react bundle
// app.get(`*`, (req, res, next) => res.sendFile(path.resolve(`./public/index.html`)));

app.use(Raven.errorHandler());
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

const path = require('path');
const fs = require('fs');
const express = require(`express`);
const Raven = require(`raven`);
const rateLimit = require('express-rate-limit');

const { apiRouter } = require(`router`);
const { cors } = require(`middleware`)

const app = express();
const port = process.env.PORT || 8080;
const internalServerError = { "message": "internal server error"};
app.use(cors);

if (process.env.NODE_ENV !== 'development') {
  Raven.config(process.env.DR_API_RAVEN_DNS).install();
  app.use(Raven.requestHandler());
}

app.enable(`trust proxy`);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((_req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
  next();
});

// const limiter = rateLimit({
//   windowMs: 60 * 1000, // 10 minutes
//   max: 100 // limit each IP to 1000 requests per windowMs
// })

// app.use(limiter);

app.use(`/api`, apiRouter);
app.use('/images/:queen', ({ params }, res) => {
  const imagePath = path.resolve(`./images/${params.queen}`);
  fs.access(imagePath, (err) => {
    if (err) {
      res.status(404).json({ message: `${params.queen} does not exist.` })
      return;
    }
    
    res.sendFile(imagePath, (err) => {
      if (err) {
        res.status(500).json(internalServerError);
        return
      }
    });
  });
});

app.get('/*', (_req, res) => {
  res.status(301).redirect("https://drag-race-api.readme.io/docs")
});

// uncomment this to serve react bundle
// app.use(express.static('public'));
// app.get(`*`, (req, res, next) => res.sendFile(path.resolve(`./public/index.html`)));

app.use(Raven.errorHandler());
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

const path = require('path');
const fs = require('fs');
const express = require(`express`);
const Raven = require(`raven`);
const bodyParser = require(`body-parser`);

const { apiRouter } = require(`router`);
const { rateLimit, cors } = require(`middleware`)

const app = express();
const port = process.env.PORT || 3000;
const internalServerError = { "message": "internal server error"};
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
app.get("/.well-known/acme-challenge/d7mg0_H6cVkhyxqxY-pZF6WreJEm-Dj6jVxQtxil9as", (req, res) => {
  res.send('d7mg0_H6cVkhyxqxY-pZF6WreJEm-Dj6jVxQtxil9as.a4AiHeIJiW5peAFQHlmEn4f1L0UX05RDxhB0P_NcQb8');
});

app.get("/challenge", ({ params }, res) => {
  res.send('d7mg0_H6cVkhyxqxY-pZF6WreJEm-Dj6jVxQtxil9as.a4AiHeIJiW5peAFQHlmEn4f1L0UX05RDxhB0P_NcQb8');
})

// comment these two routes out to start serving react bundle
app.get('/', (req, res) => {
  if (req.query.token) {
    res.send('d7mg0_H6cVkhyxqxY-pZF6WreJEm-Dj6jVxQtxil9as.a4AiHeIJiW5peAFQHlmEn4f1L0UX05RDxhB0P_NcQb8');
    return
  }
  res.status(301).redirect('https://drag-race-api.readme.io/docs');
});

app.get('/*', (req, res) => {
  res.status(400).json({ message: 'no route found.' });
});
// uncomment this to serve react bundle
// app.get(`*`, (req, res, next) => res.sendFile(path.resolve(`./public/index.html`)));

app.use(Raven.errorHandler());
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

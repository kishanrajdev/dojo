const express = require('express');
const path = require('path');
const products = require('./products.json');

const app = express();
const port = process.env.NODE_ENV === 'production' ? 3000 : 5000;

app.get('/product/:id', (req, res, next) => {
  res.send(products[req.params.id] || {});
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')))
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

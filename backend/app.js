import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/products', async (req, res) => {
  const fileContent = await fs.readFile('./data/product.json');

  const placesData = JSON.parse(fileContent);

  res.status(200).json({ places: placesData });
});

app.get('/order-products', async (req, res) => {
  const fileContent = await fs.readFile('./data/order-products.json');

  const places = JSON.parse(fileContent);

  res.status(200).json({ places });
});

app.put('/order-products', async (req, res) => {
  const places = req.body.places;

  await fs.writeFile('./data/order-products.json', JSON.stringify(places));

  res.status(200).json({ message: 'Order Placed!' });
});

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3000);

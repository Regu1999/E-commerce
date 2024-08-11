import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';
import authRout from './auth/auth.js'
import { productQueryDataFormeter } from './util/queryDataToArrayConverter.js';
const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

  next();
});

app.get('/products', async (req, res) => {
  const queryData = req.query;
  const fileContent = await fs.readFile('./data/product.json');
  const productData = JSON.parse(fileContent);
  let products = productData.data.products;

  if (Object.keys(queryData).length !== 0) {

    const { price, size } = productQueryDataFormeter(queryData);

    products = products.filter((productVal) => {
      const priceRange = price.length === 0 ? true : price.some((range) => productVal.price >= range.minVal && productVal.price <= range.maxVal);
      const sizeRange = size.length === 0 ? true : productVal.availableSizes.some((avlSize) => size.includes(avlSize))
      return priceRange & sizeRange
    });

  }
  setTimeout(()=>{
    res.status(200).json({ products: products });
  },5000)
});

app.get('/order-products', async (req, res) => {
  const fileContent = await fs.readFile('./data/order-products.json');

  const orderProducts = JSON.parse(fileContent);

  res.status(200).json({ orderProducts });
});

app.put('/order-products', async (req, res) => {
  const orderProducts = req.body.orderProducts;

  await fs.writeFile('./data/order-products.json', JSON.stringify(orderProducts));

  res.status(200).json({ message: 'Order Placed!' });
});

app.use(authRout);
// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3000);

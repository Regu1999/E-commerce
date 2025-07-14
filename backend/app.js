import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config'

import productRoute from './src/routes/products.js'
import authRout from './src/routes/auth.js'
import connectDb from './src/config/db.js';
const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

  next();
});


app.use(productRoute)
app.use(authRout);
// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});
connectDb().catch(() => {

})
app.listen(process.env.PORT || 3000);

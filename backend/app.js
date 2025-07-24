import bodyParser from 'body-parser';
import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config'

import productRoute from './src/routes/products.js'
import authRout from './src/routes/auth.js'
import connectDb from './src/config/db.js';
import { NotFoundError } from './src/util/errors.js';
const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());
app.use(cookieParser())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});


app.use(productRoute)
app.use(authRout);

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  // console.log("working");
  
  const error = new NotFoundError('404 - Not Found')
  res.status(error.status).json({ message: error.message });
});
app.use((err, req, res, next) => {
  const message = err.message || "Unable to process, Try again later";
  const status = err.status || 500;
  const info = err.info || null;
  return res.status(status).json({
    message,
    info
  })
})
// 404

connectDb().catch(() => {
  console.log("unable to connect db");
})
app.listen(process.env.PORT || 3000);

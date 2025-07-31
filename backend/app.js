import bodyParser from 'body-parser';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors"
import 'dotenv/config'

import productRoute from './src/routes/products.js'
import authRout from './src/routes/auth.js'
import connectDb from './src/config/db.js';
import { NotFoundError } from './src/util/errors.js';
const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());
app.use(cookieParser())
const CROS_ORIGIN_URL = process.env.CROS_ORIGIN_URL || "*";

app.use(cors({
  origin: CROS_ORIGIN_URL,
  credentials: true
}))

app.use(productRoute)
app.use(authRout);

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
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
  throw new Error("unable to connect db")
})
app.listen(process.env.PORT || 3000);

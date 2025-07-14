import express from 'express'
import { createOrder, getOrderes } from '../controler/orders.js'
const router = express.Router();


router.get('/order-products', getOrderes);

router.put('/order-products', createOrder);

export default router;
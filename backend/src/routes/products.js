import express from 'express'
import { body } from "express-validator"

import { getProducts, addToCart, getCartTotal } from '../controler/products.js'
import { checkAuth } from "../util/auth.js"
const router = express.Router();

router.get('/products', getProducts);

router.post('/cart',
    [
        body("productId").notEmpty().trim().withMessage('Product is missing'),
        body('qty').notEmpty().trim().withMessage('Quantity is missing ')
    ],
    checkAuth, addToCart);

router.get('/cartTotal', checkAuth, getCartTotal);


export default router;
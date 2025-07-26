import { productQueryDataFormeter } from '../util/queryDataToArrayConverter.js';
import { validationResult } from 'express-validator'

import Products from '../model/Products.js'
import Cart from '../model/Cart.js'

export const getProducts = async (req, res, next) => {
    const queryData = req.query;

    try {
        if (Object.keys(queryData).length !== 0) {
            const customizeQuery = productQueryDataFormeter(queryData);
            let products = await Products.findByQuery(customizeQuery);

            return res.status(200).json({ products: products });
        }

        let products = await Products.find();
        return res.status(200).json({ products: products });
    } catch (error) {
        next(error)
    }
}

export const addToCart = async (req, res, next) => {
    const errResult = validationResult(req)
    try {
        if (!errResult.isEmpty()) {
            const error = new Error("Missing Datas.");
            error.status = 422;
            error.info = errResult.array();
            throw error
        }
        const { productId, qty } = req.body;
        const { _id } = req.user;
        const cartData = await Cart.findOne({ productId, userId: _id })
        if (cartData) {
            cartData.qty += +qty;
            await cartData.save();
        } else {
            const newCart = await new Cart({ productId, qty: +qty, userId: _id });
            await newCart.save();
        }

        res.status(200).json({ message: "Added to the cart" });

    } catch (error) {
        next(error)
    }
}

export const getCartTotal = async (req, res, next) => {
    const { _id } = req.user;

    try {
        const cartData = await Cart.getCartTotal(_id);
        return res.status(200).json(cartData)
    } catch (error) {
        next(error)
    }
}
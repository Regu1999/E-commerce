import fs from 'node:fs/promises';
import { productQueryDataFormeter } from '../util/queryDataToArrayConverter.js';

import Products from '../model/Products.js'

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


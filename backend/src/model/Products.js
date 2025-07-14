import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    availableSizes: {
        require: true,
        type: [String]
    },
    currencyFormat: {
        require: true,
        type: String
    },
    currencyId: {
        require: true,
        type: String
    },
    description: String,
    installments: {
        require: true,
        type: Number
    },
    isFreeShipping: {
        require: true,
        type: Boolean
    },
    price: {
        require: true,
        type: Number
    },
    sku: {
        require: true,
        type: Number
    },
    style: String,
    title: {
        require: true,
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
productSchema.statics.findByQuery = async function (filter){
    console.log(filter);
    
    const query = {};
    if (filter.price.length > 0) {
        const priceCondition = filter.price.map(range => ({
            price: { $gte: range.minVal, $lte: range.maxVal }
        }))
        query.$or = priceCondition;
    }

    if (filter.size.length > 0) {
        query.availableSizes = { $in: filter.size }

    }
    const product =await this.find(query);

    return product
}

const Products = model('product', productSchema);

export default Products;
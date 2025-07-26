import { Schema, model } from 'mongoose'

const cartSchma = Schema({
    productId: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    userId: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    qty: {
        require: true,
        type: Number
    }
})

cartSchma.statics.getCartTotal = async function (id) {
    const cartData= await this.aggregate([
        {
            $match: {
                userId: id
            }
        },
        {
            $lookup: {
                from: 'products',
                localField: 'productId',
                foreignField: '_id',
                as: 'productData'
            }
        },
        {
            $unwind: '$productData'
        },
        {
            $project: {

                currencyFormat: '$productData.currencyFormat',
                currencyId: '$productData.currencyId',
                qty: 1,
                totalPrice: { $multiply: ['$productData.price', '$qty'] }
            }
        },
        {
            $group: {
                _id: null,
                currencyFormat: { $first: '$currencyFormat' },
                currencyId: { $first: '$currencyId' },
                totalAmount: { $sum: '$totalPrice' },
                totalQty: { $sum: '$qty' }
            }
        }
    ]);
    delete cartData[0]._id;
    return cartData[0]
}
const Cart = model("Cart", cartSchma);

export default Cart;
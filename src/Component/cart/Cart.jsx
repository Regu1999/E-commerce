import CartProduct from './CartProduct.jsx'
import CheckOut from './CheckOut.jsx'
export default function Cart() {
    return <div className='flex flex-col-reverse md:flex-row'>
        <table className="table-auto w-full self-start shadow-md lg:mt-5 mt-3">
            <h3 className="text-xl font-bold text-gray-600 my-3 ps-3">Cart Product</h3>
            <tbody>
                <CartProduct />
            </tbody>
        </table>
        <CheckOut />
    </div>
}
import CartProduct from './CartProduct.jsx'
import CheckOut from './CheckOut.jsx'
export default function Cart() {
    return <div className='flex'>
        <table className="table-auto w-full shadow-md mt-5">
            <tbody>
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
            </tbody>
        </table>
        <CheckOut />
    </div>
}
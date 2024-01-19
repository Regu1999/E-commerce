import Button from "./UI/Button";
import { useState } from "react";
export default function Product({product}) {
    const [hoverStatus, setHoverStatus]=useState(false); 
    const {sku, title, isFreeShipping, currencyFormat, price}=product;
    return (
        <div className="w-52 m-5">
            <div className="relative" onMouseEnter={()=>setHoverStatus(true)} onMouseLeave={()=>setHoverStatus(false)}>
                {isFreeShipping && <small className="bg-black top-0 text-white px-3 py-1 align-middle text-center absolute right-0 text-xs">Free shipping</small>}
                <img src={`http://localhost:3000/${sku}-${!hoverStatus?"1":"2"}-product.webp`} alt="mens dress" />
            </div>
            <div className="h-16 text-center flex justify-center items-center flex-wrap">
                {title}
            </div>
            <div className="flex justify-center items-center"><hr className="w-6 h-1 rounded-full mb-3 bg-rose-100" /></div>
            <div className="text-center">
                <span>{currencyFormat}</span>
                <span className="text-3xl font-bold px-1">{price}</span>.
                <span>90</span>
            </div>
            <div className="text-center text-gray-400">
                <span>or 9 X</span>
                <span className="font-bold text-lg">$1.21</span>
            </div>
            <Button btnStyle="w-full mt-2 p-2 hover:bg-rose-100 duration-300">
                Add to cart
            </Button>
        </div>
    )
}
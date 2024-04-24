import Product from "../Component/Product.jsx"
import Filter from "../Component/Filter.jsx";
import { json, useLoaderData } from "react-router-dom";
import { useMediaQueryDevice } from "../hooks/useMediaQuryDevice.js";
import { IoCloseSharp } from "react-icons/io5";

export default function Shop() {
    const { isTablet } = useMediaQueryDevice()
    const loaderData = useLoaderData();
    const products = loaderData.places.data.products

    return (
        <div className="flex animate-fade-in h-full">
            {isTablet && <div className="border-r shadow-md w-[900px]"><Filter /></div>}
            <div className="flex flex-wrap justify-center p-3">
                <div className="w-full">
                    <p className=" text-xl mb-2">Your selection</p>
                    <span className="shadow shadow-rose-200 p-2 rounded-full cursor-pointer">
                        <label htmlFor="">Summa</label>
                        <button className="bg-black h-5 w-5 rounded-full text-white"><IoCloseSharp /></button>
                    </span>
                </div>
                {products.map((product) => {
                    return <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export async function loader() {
    const responce = await fetch("http://localhost:3000/products");
    if (!responce.ok) {
        throw json({ message: 'Unabel to process data', }, { status: 500, })
    }
    return responce
}
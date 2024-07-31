import Product from "../Component/Product.jsx"
import Filter from "../Component/Filter.jsx";
import { json, useLoaderData } from "react-router-dom";
import { useMediaQueryDevice } from "../hooks/useMediaQuryDevice.js";
import { IoCloseSharp } from "react-icons/io5";
import { getProduct } from "../https.js";

export default function Shop() {
    const { isTablet } = useMediaQueryDevice()
    const loaderData = useLoaderData();
    const products = loaderData;

    return (
        <div className="flex animate-fade-in h-full">
            {isTablet && <div className="border-r shadow-md w-[900px]"><Filter /></div>}
            <div className="flex flex-wrap justify-center p-3">
                <div className="w-full">
                    <p className=" text-xl mb-2">Your selection</p>
                    <span className="shadow shadow-gray-500 text-sm font-bold bg-rose-200 text-rose-100 p-1 px-2 rounded-full cursor-pointer text-center inline-flex items-center gap-1 me-3 mb-3 hover:scale-105">
                        <label htmlFor="">XS</label>
                        <button className="bg-rose-100 h-4 w-4 rounded-full text-rose-200 inline-flex justify-center items-center hover:bg-black"><IoCloseSharp /></button>
                    </span>
                    <span className="shadow shadow-gray-500 text-sm font-bold bg-rose-200 text-rose-100 p-1 px-2 rounded-full cursor-pointer text-center inline-flex items-center gap-1 me-3 mb-3 hover:scale-105">
                        <label htmlFor="">5-20</label>
                        <button className="bg-rose-100 h-4 w-4 rounded-full text-rose-200 inline-flex justify-center items-center hover:bg-black"><IoCloseSharp /></button>
                    </span>
                    <span className="shadow shadow-gray-500 text-sm font-bold bg-rose-200 text-rose-100 p-1 px-2 rounded-full cursor-pointer text-center inline-flex items-center gap-1 me-3 mb-3 hover:scale-105">
                        <label htmlFor="">XXl</label>
                        <button className="bg-rose-100 h-4 w-4 rounded-full text-rose-200 inline-flex justify-center items-center hover:bg-black"><IoCloseSharp /></button>
                    </span>
                    <span className="shadow shadow-gray-500 text-sm font-bold bg-rose-200 text-rose-100 p-1 px-2 rounded-full cursor-pointer text-center inline-flex items-center gap-1 me-3 mb-3 hover:scale-105">
                        <label htmlFor="">50-100</label>
                        <button className="bg-rose-100 h-4 w-4 rounded-full text-rose-200 inline-flex justify-center items-center hover:bg-black"><IoCloseSharp /></button>
                    </span>
                    <hr className="mt-3" />
                </div>
                {products.map((product) => {
                    return <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export async function loader() {
    const responce = await getProduct();

    // if (!responce.ok) {
    //     throw json({ message: 'Unabel to process data', }, { status: 500, })
    // }
    return responce
}
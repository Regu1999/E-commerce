import Product from "../Component/Product.jsx"
import Filter from "../Component/Filter.jsx";
import { json, useLoaderData } from "react-router-dom";
import { useMediaQueryDevice } from "../hooks/useMediaQuryDevice.js";
export default function Shop() {
    const { isTablet } = useMediaQueryDevice()
    const loaderData = useLoaderData();
    return (
        <div className="flex animate-fade-in h-full">
            {isTablet && <div className="border-r shadow-md w-[900px]"><Filter /></div>}
            <div className="flex flex-wrap justify-center">
                {loaderData.map((product) => {
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
    const responseData = await responce.json();
    const product = await responseData.places.data.products
    return product
}
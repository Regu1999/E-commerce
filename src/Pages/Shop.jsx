import Product from "../Component/Product.jsx"
import { json, useLoaderData } from "react-router-dom";
export default function Shop() {
    const loaderData = useLoaderData();
    return (
        <div className="flex flex-wrap justify-center animate-fade-in mb-10">
            {loaderData.map((product) => {
                return <Product key={product.id} product={product} />
            })}
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
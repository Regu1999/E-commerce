import { useState, useEffect } from "react"
import Product from "./Product.jsx"
export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProduct() {
            try {
                const responce = await fetch("http://localhost:3000/products");
                const responseData = await responce.json();
                const product = await responseData.places.data.products
                if (!responce.ok) {
                    throw new Error("unable to fetch products")
                }
                setProducts(product)
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [])

    return (
        <div className="flex flex-wrap justify-center">
            {products.map((product) => {
                return <Product key={product.id} product={product} />
            })}
        </div>
    )
}
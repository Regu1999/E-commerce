import { useState, useEffect } from "react"
import Product from "./Product.jsx"
import Loader from "./UI/Loader.jsx";
import Error from "./UI/Error.jsx";
export default function Shop() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const loadingArrays = new Array(10).fill(0);
    useEffect(() => {
        async function fetchProduct() {
            setIsLoading(true)
            try {
                const responce = await fetch("http://localhost:3000/products");
                const responseData = await responce.json();
                const product = await responseData.places.data.products
                if (!responce.ok) {
                    throw new Error("unable to fetch products")
                }
                setProducts(product);
                setIsLoading(false)
            } catch (error) {
                setErrorMessage("We're unable to find the data that you're looking for")
                setIsLoading(false)
            }
        }
        fetchProduct();
    }, [])

    if (errorMessage) {
        return <Error errormessage={errorMessage} />
    }

    return (
        <div className="flex flex-wrap justify-center animate-fade-in">
            {isLoading && loadingArrays.map((loadingArray,index) => {
                return <Loader key={index} />
            })}
            {products.map((product) => {
                return <Product key={product.id} product={product} />
            })}
        </div>
    )
}
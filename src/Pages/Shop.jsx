import { useState, useEffect } from "react"
import Product from "../Component/Product.jsx"
import Loader from "../Component/UI/Loader.jsx";
import Error from "../Component/UI/Error.jsx";
import { useLoaderData } from "react-router-dom";
export default function Shop() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const loadingArrays = new Array(10).fill(0);
    const loaderData=useLoaderData();
    console.log(loaderData);
    // useEffect(() => {
    //     async function fetchProduct() {
    //         setIsLoading(true)
    //         try {
    //             const responce = await fetch("http://localhost:3000/products");
    //             const responseData = await responce.json();
    //             const product = await responseData.places.data.products
    //             if (!responce.ok) {
    //                 throw new Error("unable to fetch products")
    //             }
    //             setProducts(product);
    //             setIsLoading(false)
    //         } catch (error) {
    //             console.log(error);
    //             setErrorMessage("We're unable to find the data that you're looking for")
    //             setIsLoading(false)
    //         }
    //     }
    //     fetchProduct();
    // }, [])

    // if (errorMessage) {
    //     return <Error errormessage={errorMessage} />
    // }

    return (
        <div className="flex flex-wrap justify-center animate-fade-in mb-10">
            {isLoading && loadingArrays.map((loadingArray, index) => {
                return <Loader key={index} />
            })}
            {loaderData.map((product) => {
                return <Product key={product.id} product={product} />
            })}
        </div>
    )
}

export async function loader() {
    try {
        const responce = await fetch("http://localhost:3000/products");
        const responseData = await responce.json();
        const product = await responseData.places.data.products
        if (!responce.ok) {
            throw new Error("unable to fetch products")
        }
        return product
    } catch (error) {
        console.log("We're unable to find the data that you're looking for")
    }
}
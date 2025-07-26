import Product from "../Component/Product.jsx"
import Filter from "../Component/Filter.jsx";
import { useMediaQueryDevice } from "../hooks/useMediaQuryDevice.js";
import { getProduct, queryClient } from "../https.js";
import { useLoaderData, defer, Await, useNavigation } from "react-router-dom";
import { Suspense } from "react";
import LoadingCard from "../Component/UI/LoadingCard.jsx";

export default function Shop() {
    const navigation = useNavigation();
    const data = useLoaderData();
    const { isTablet } = useMediaQueryDevice();
    return (
        <div className="flex justify-center animate-fade-in h-full">
            {isTablet && <div className="border-r shadow-md min-w-[250px] min-h-full"><Filter /></div>}
                {navigation.state === "loading" && <LoadingCard loadingCount={8} />}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 mb-10 gap-3 md:gap-10 mx-[5%]">
                
                <Suspense fallback={<LoadingCard loadingCount={8} />}>
                    <Await resolve={data.products} errorElement={<div className="w-full h-full">
                        <h3 className="text-2xl text-rose-100">Something went wrong...  </h3>
                    </div>}>
                        {(products) =>
                            products.length === 0 ? (
                                <div className="w-full h-full">
                                    <h3 className="text-2xl text-rose-100">Product not found...</h3>
                                </div>
                            ) : (
                                products.map((product) => (
                                    <Product key={product.id} product={product} />
                                ))
                            )
                        }
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}
async function productLoaderFunction(url) {
    if (url.search) {

        const queryString = url.search
        const responce = await queryClient.fetchQuery({
            queryKey: ['product', { queryString }],
            queryFn: () => getProduct({ queryString }),
            staleTime: 50000
        });

        return responce;

    } else {
        
        const responce = await queryClient.fetchQuery({
            queryKey: ['product'],
            queryFn: getProduct,
            staleTime: 50000
        });

        return responce;
    }
}
export function loader({ request }) {
    const url = new URL(request.url);

    return defer({ products: productLoaderFunction(url) })
}
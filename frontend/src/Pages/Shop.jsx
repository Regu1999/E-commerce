import Product from "../Component/Product.jsx"
import Filter from "../Component/Filter.jsx";
import { useMediaQueryDevice } from "../hooks/useMediaQuryDevice.js";
import { getProduct, queryClient } from "../https.js";
import { useLoaderData, defer, Await, useNavigation } from "react-router-dom";
import { Suspense } from "react";
import LoadingCard from "../Component/UI/LoadingCard.jsx";
{/* pending task*/ }
// import { IoCloseSharp } from "react-icons/io5";
// import { useSelector, useDispatch } from "react-redux";
// import { remove } from '../store/shopFilterData.js'
export default function Shop() {
    const navigation = useNavigation();
    const data = useLoaderData();
    const { isTablet } = useMediaQueryDevice();
    {/* pending task*/ }
    // const checkedData = useSelector((state) => state.filter);
    // const dispatch = useDispatch();

    return (
        <div className="flex animate-fade-in h-full">
            {isTablet && <div className="border-r shadow-md min-w-[250px]"><Filter /></div>}
            <div className="flex flex-wrap justify-center p-3">
                {/* pending task*/}
                {/* {(checkedData.price.length !== 0 || checkedData.size.length !== 0) && !isTablet && <div className="w-full">
                    <p className=" text-xl mb-2">Your selection</p>
                    {checkedData.price && checkedData.price.map((data) => {
                        return <span key={data} className="shadow shadow-gray-500 text-sm font-bold bg-rose-200 text-rose-100 p-1 px-2 rounded-full cursor-pointer text-center inline-flex items-center gap-1 me-3 mb-3 hover:scale-105">
                            <label htmlFor="">{data}</label>
                            <button onClick={() => dispatch(remove({type:'price',data}))} className="bg-rose-100 h-4 w-4 rounded-full text-rose-200 inline-flex justify-center items-center hover:bg-black"><IoCloseSharp /></button>
                        </span>
                    })}
                    {checkedData.size && checkedData.size.map((data) => {
                        return <span key={data} className="shadow shadow-gray-500 text-sm font-bold bg-rose-200 text-rose-100 p-1 px-2 rounded-full cursor-pointer text-center inline-flex items-center gap-1 me-3 mb-3 hover:scale-105">
                            <label htmlFor="">{data}</label>
                            <button onClick={() => dispatch(remove({type:'size',data}))} className="bg-rose-100 h-4 w-4 rounded-full text-rose-200 inline-flex justify-center items-center hover:bg-black"><IoCloseSharp /></button>
                        </span>
                    })}
                    <hr className="mt-3" />
                </div>} */}
                {navigation.state === "loading" && <LoadingCard loadingCount={8} />}
                <Suspense fallback={<LoadingCard loadingCount={8} />}>
                    <Await resolve={data.products} errorElement={<div className="w-full h-full">
                        <h3 className="text-2xl text-rose-100">Product not exist...  </h3>
                    </div>}>
                        {(products) => (
                            products.map((product) => {
                                return <Product key={product.id} product={product} />
                            })
                        )}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}
async function productLoaderFunction(url) {
    if (url.search) {

        const queryString = url.search
        console.log("with query string", queryString);
        const responce = await queryClient.fetchQuery({
            queryKey: ['product', { queryString }],
            queryFn: () => getProduct({ queryString }),
            staleTime: 50000
        });
        if (responce.length === 0) {
            throw new Error("Product not found")
        }
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
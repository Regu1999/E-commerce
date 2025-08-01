import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Button from "./UI/Button";
import { formetCurrency } from "./currencyFormeter.js";
import Loader from "./UI/Loader.jsx";
import { sendCart, queryClient } from "../https.js"
import useNotification from "../hooks/useNotification.js";
export default function Product({ product }) {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [hoverStatus, setHoverStatus] = useState(false);
    const token = useSelector(state => state.token);
    const notification = useNotification()

    const { mutate: addToCartMutate, isError: cartIsError, error: cartError, isPending } = useMutation({
        mutationFn: (data) => sendCart(data, token),
        onSuccess: (data) => {
            console.log(data);
            queryClient.invalidateQueries({ queryKey: ['cartTotal'] })
        }
    })
    if (cartIsError) {
        notification({ message: cartError.message, status: 'error', info: cartError.info });

    }
    const { sku, title, isFreeShipping, currencyFormat, price, currencyId, installments, _id } = product;

    const productPrice = formetCurrency(price, currencyId).slice(1).split(".");
    const instalAmount = formetCurrency(price, currencyId, installments);

    const API_URL = import.meta.env.VITE_API_URL

    function checkisLoaded(e) {
        setIsImageLoaded(e.target.complete)

    }
    function addToCart() {
        addToCartMutate({
            productId: _id,
            qty: 1
        })
    }
    return (
        <>
            <div className={`${!true ? "hidden" : ''}`}>
                <div className="relative max-h-[70%] overflow-hidden" onMouseEnter={() => setHoverStatus(true)} onMouseLeave={() => setHoverStatus(false)}>
                    {isFreeShipping && <small className="bg-black top-0 text-white px-2 py-1 align-middle text-center absolute right-0 text-[50%] md:text-[60%]">Free shipping</small>}
                    <img src={`${API_URL}/images/${sku}-${!hoverStatus ? "1" : "2"}-product.webp`} alt="mens dress" onLoad={checkisLoaded} />
                </div>
                <div className="min-h-16 text-center flex justify-center items-center flex-wrap  text-sm/6 md:text-[100%]">
                    {title}
                </div>
                <div className="flex justify-center items-center"><hr className="w-6 h-1 rounded-full mb-3 bg-rose-100" /></div>
                <div className="min-h-16">
                    <div className="text-center">
                        <span>{currencyFormat}</span>
                        <span className="text-[150%] font-bold px-1">{productPrice[0]}</span>.
                        <span>{productPrice[1]}</span>
                    </div>
                    {installments != 0 && <div className="text-center text-gray-400">
                        <span>or {installments} X</span>
                        <span className="font-bold text-lg">{instalAmount}</span>
                    </div>}
                </div>
                <Button onClick={addToCart} btnStyle="w-full mt-2 p-2 text-[80%]" disabled={isPending}>
                    {isPending?"Adding...":"Add to cart"}
                </Button>
            </div>
            {!isImageLoaded && <Loader />}
        </>
    )
}

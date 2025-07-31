import { useQuery } from "@tanstack/react-query";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { getCartTotel } from '../../https.js'
import useNotification from "../../hooks/useNotification.js";
import { useEffect } from "react";
export default function CartIcon({ styleClass, showPrice = true }) {
    const token = useSelector(state => state.token)
    const notification = useNotification();

    const { data, error, isError } = useQuery({
        queryKey: ['cartTotal'],
        queryFn: () => getCartTotel(token),
        enabled: token != null,
        refetchOnWindowFocus: false
    })
    console.log(data);

    useEffect(() => {
        if (isError) {
            notification({ message: error.message, status: 'error' })
        }
    }, [error, isError])


    return <NavLink to="/shoppingCart" className={`flex items-center justify-center gap-1 ${styleClass}`}>
        <div className="relative ">
            <MdOutlineShoppingBag className="text-2xl" />
            {data && <span className="text-white text-center bg-rose-100 h-4 w-4 rounded-full absolute 
            top-[-5px] left-[13px] text-[10px]">
                {data.totalQty}
            </span>}
        </div>
        {showPrice && <div>{data && data.currencyFormat}{data ? data.totalAmount.toFixed(2) : 0.00}</div>}
    </NavLink>
}
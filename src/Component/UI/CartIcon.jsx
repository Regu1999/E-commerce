import { MdOutlineShoppingBag } from "react-icons/md";
export default function CartIcon({styleClass}) {
    return <a href="#" className={`flex items-center justify-center gap-1 ${ styleClass}`}>
        <div className="relative ">
            <MdOutlineShoppingBag className="text-2xl" />
            <span className="text-white text-center bg-rose-100 h-4 w-4 rounded-full absolute top-[-5px] left-[13px] text-[10px]">0</span>
        </div>
        <div className="">$0.00</div></a>
}
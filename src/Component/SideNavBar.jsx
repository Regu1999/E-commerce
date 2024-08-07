import FlexContainer from "./UI/FlexContainer";
import { IoCloseSharp } from "react-icons/io5";
import Filter from "./Filter"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function SideNavBar({ isView, handleMenu, children }) {
    const location = useLocation();
    const isShopPage = location.pathname === '/shop';

    return <div className={`fixed ${isView ? 'start-0' : 'left-[-100%]'}  w-full duration-200 max-w-56 h-full opacity-2 shadow-lg bg-rose-100 overflow-auto pb-20 `}>
        <div className="border-b p-3 border-rose-400 flex items-center justify-between">
            <FlexContainer styleClass="text-2xl font-serif font-bold text-white"><Link to="/">F W</Link></FlexContainer>
            <button onClick={handleMenu}><IoCloseSharp className="text-white text-xl" /> </button>
        </div>
        <div>
            {children}
            {isShopPage && <Filter />}
        </div>
    </div>
}
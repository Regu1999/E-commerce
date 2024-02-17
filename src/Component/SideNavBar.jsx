import FlexContainer from "./UI/FlexContainer";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react"
export default function SideNavBar({isView, handleMenu, children }) {

    return <div className={`fixed ${isView ? 'start-0' : 'left-[-100%]'}  w-full duration-200 max-w-80 h-full opacity-2 shadow-lg bg-rose-100 overflow-auto pb-20 `}>
        <div className="border-b p-3 border-rose-400 flex items-center justify-between">
            <FlexContainer styleClass="text-2xl font-serif font-bold text-white"><a href="#">F W</a></FlexContainer>
            <button onClick={handleMenu}><IoCloseSharp className="text-white text-xl" /> </button>
        </div>
        {children}
    </div>
}
import { useState } from "react";
import CartIcon from "./UI/CartIcon";
import SideNavBar from "./SideNavBar";
import FlexContainer from "./UI/FlexContainer";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { SlMenu } from "react-icons/sl";
import { NavLink } from "react-router-dom";


export default function NavBar({ }) {
    const [isView, setIsEnabled] = useState(false);
    const isTablet = useMediaQuery({ query: '(min-width:640px)' });
    const hoverEffect = "rounded-full p-2 hover:bg-gray-200 transition duration-500 hover:shadow-sm"
    function handleMenu() {
        setIsEnabled(!isView)
    }
    const PageLinks = () => (
        <FlexContainer styleClass={` ${isTablet && 'gap-6'} ${!isTablet && 'flex-col'}`}>
            <NavegationLink to='/shop'>Shop</NavegationLink>
            <NavegationLink to='/contact'>Contact</NavegationLink>
        </FlexContainer>
    )

    const LikeButton = ({ styleClass }) => {
        return <NavLink to={'likedProduct'} className={`${styleClass} ${hoverEffect} `}><FaRegHeart className="text-xl" /></NavLink>
    }

    const NavegationLink = ({ children,to }) => {
        return <NavLink to={to} className={`${isTablet && hoverEffect} ${!isTablet && 'text-white p-2'}`}>{children}</NavLink>
    }

    return <nav className="h-16 shadow-md flex justify-center sticky top-0 bg-white z-10">
        <FlexContainer styleClass='w-full justify-between px-5 h-full max-w-screen-lg'>
            <FlexContainer styleClass='gap-3'>
                {!isTablet && <SlMenu className="hover:text-rose-100 transition duration-700" onClick={handleMenu} />}

                {!isView && <FlexContainer styleClass="text-2xl font-serif font-bold text-rose-100"><NavLink to="/">Fashion World</NavLink></FlexContainer>}
            </FlexContainer>

            {isTablet && <PageLinks />}

            <FlexContainer styleClass='gap-6'>
                <button className={hoverEffect}><IoSearch className="text-xl" /></button>
                {isTablet && <LikeButton />}
                {isTablet && <CartIcon styleClass={hoverEffect} />}
            </FlexContainer>
        </FlexContainer>

        {!isTablet && <div className="h-10 flex fixed w-full items-center border-t border-rose-200 bottom-0 z-10 shadow-inner bg-white">
            <LikeButton styleClass="w-full h-full flex items-center justify-center border-r border-rose-200 rounded-none" />
            <CartIcon styleClass={`w-full h-full rounded-none ${hoverEffect}`} />
        </div>}
        {!isTablet && <SideNavBar isView={isView} handleMenu={handleMenu}>
            <PageLinks />
        </SideNavBar>}
    </nav>
}
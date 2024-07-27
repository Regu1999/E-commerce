import { useEffect, useState, useRef } from "react";
import CartIcon from "./UI/CartIcon";
import SideNavBar from "./SideNavBar";
import FlexContainer from "./UI/FlexContainer";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { SlMenu } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useMediaQueryDevice } from '../hooks/useMediaQuryDevice'
import { handleHeight } from '../store/calculateExptySpace';
import UserProfile from "./UI/UserFrofile";

const LikeButton = ({ styleClass, hoverEffect }) => {
    return <NavLink to={'likedProduct'} className={`${styleClass} ${hoverEffect} `}><FaRegHeart className="text-xl" /></NavLink>
}

export default function NavBar({ }) {
    const [isView, setIsEnabled] = useState(false);
    const { isTablet } = useMediaQueryDevice();
    const { setEmptyHeight } = handleHeight();
    const navContainer = useRef()
    const hoverEffect = "rounded-full p-2 hover:bg-gray-200 transition duration-500 hover:shadow-sm "
    function handleMenu() {
        setIsEnabled(!isView)
    }
    useEffect(() => {
        const updateHeight = () => {
            const windowHeight = window.innerHeight;
            const contentHeight = navContainer.current ? navContainer.current.scrollHeight : 0;
            const emptySpace = Math.max(windowHeight - contentHeight, 0);
            setEmptyHeight(emptySpace);
        };

        updateHeight();

        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };

    }, [])
    const NavegationLink = ({ children, to, styleClass }) => {
        return <NavLink to={to} className={`${isTablet && hoverEffect} ${!isTablet && 'text-white p-2 '}${styleClass}`}>{children}</NavLink>
    }
    const PageLinks = () => (
        <FlexContainer styleClass={` ${isTablet && 'gap-6'} ${!isTablet && 'flex-col'}`}>
            <NavegationLink to='shop'>Shop</NavegationLink>
            <NavegationLink to='contact'>Contact</NavegationLink>
        </FlexContainer>
    )



    return <nav ref={navContainer} className="h-16 shadow-md flex justify-center sticky top-0 bg-white z-10">
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
                {isTablet && <UserProfile NavegationLink={NavegationLink} />}
                {/* <NavegationLink to='auth?mode=login' styleClass=''>
                    <CgProfile className="text-2xl text-black" />
                </NavegationLink> */}
            </FlexContainer>
        </FlexContainer>

        {!isTablet && <div className="h-10 flex fixed w-full items-center border-t border-rose-200 bottom-0 z-10 shadow-inner bg-white">
            <LikeButton styleClass="w-full h-full flex items-center justify-center border-r border-rose-200 rounded-none" hoverEffect={hoverEffect} />
            <CartIcon styleClass={`w-full h-full rounded-none ${hoverEffect}`} showPrice={false} />
            <UserProfile NavegationLink={NavegationLink} styleClass={`w-full h-full flex items-center justify-center border-l border-rose-200 rounded-none ${hoverEffect}`} />
        </div>}
        {!isTablet && <SideNavBar isView={isView} handleMenu={handleMenu}>
            <PageLinks />
        </SideNavBar>}
    </nav>
}
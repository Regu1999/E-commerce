import CartIcon from "./UI/CartIcon";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { SlMenu } from "react-icons/sl";


export default function NavBar({ }) {
    const isMobile = useMediaQuery({ query: '(min-width:640px)' });
    const hoverEffect = "rounded-full p-2 hover:bg-gray-200 transition duration-500 hover:shadow-sm"

    function handleMenu() {
        console.log('hi');
    }
    const PageLinks = () => (
        <FlexContainer styleClass='gap-6'>
            {isMobile && <NavLink>Shop</NavLink>}
            {isMobile && <NavLink>Contact</NavLink>}
        </FlexContainer>
    )
    const FlexContainer = ({ styleClass, children }) => {
        return <div className={`${styleClass} flex items-center`}>{children}</div>
    }
    const LikeButton = ({ styleClass }) => {
        return <a href="#" className={`${styleClass} ${hoverEffect} `}><FaRegHeart className="text-xl" /></a>
    }

    const NavLink = ({ children }) => {
        return <a href="#" className={hoverEffect}>{children}</a>
    }

    return <nav className="h-16 shadow-md flex justify-center sticky top-0 bg-white z-10">
        <FlexContainer styleClass='w-full justify-between px-5 h-full max-w-screen-lg'>
            <FlexContainer styleClass='gap-3'>
                {!isMobile && <SlMenu className="hover:text-rose-100 transition duration-700" onClick={handleMenu} />}

                <FlexContainer styleClass="text-2xl font-serif font-bold text-rose-100"><a href="#">Fashion World</a></FlexContainer>
            </FlexContainer>
            
            <PageLinks />

            <FlexContainer styleClass='gap-6'>
                <button className={hoverEffect}><IoSearch className="text-xl" /></button>
                {isMobile && <LikeButton />}
                {isMobile && <CartIcon styleClass={hoverEffect} />}
            </FlexContainer>
        </FlexContainer>

        {!isMobile && <div className="h-10 flex fixed w-full items-center border-t border-rose-200 bottom-0 z-10 shadow-inner bg-white">
            <LikeButton styleClass="w-full h-full flex items-center justify-center border-r border-rose-200 rounded-none" />
            <CartIcon styleClass={`w-full h-full rounded-none ${hoverEffect}`} />
        </div>}
    </nav>
}
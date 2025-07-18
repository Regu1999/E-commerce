import { Link } from "react-router-dom";
import FlexContainer from "./UI/FlexContainer";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return <footer className="bg-black min-h-20 p-5 text-white">
        <div className="flex justify-between items-center flex-wrap gap-5 mb-3sta">
            <FlexContainer styleClass="text-2xl font-serif font-bold text-white">
                <Link to="/">F W</Link>
            </FlexContainer>
            <div className="flex gap-3 text-xs ">
                <Link to="/">About Us</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Terms</Link>
                <Link to="/">Privacy</Link>
                <Link to="/">Social Links</Link>
            </div>
        </div>
        <div className="h-[1px] w-full my-3 bg-gray-500" />
        <small className="text-xs flex justify-between flex-wrap">
            <p> &#169; <span>Regu All Right Reserved</span></p>
            <div className="flex gap-2">
                <a href="#" className="text-lg"><FaFacebook /></a>
                <a href="#" className="text-lg"><FaInstagramSquare /></a>
                <a href="#" className="text-lg"><FaTwitter /></a>
            </div>
        </small>
    </footer>
}
export default Footer
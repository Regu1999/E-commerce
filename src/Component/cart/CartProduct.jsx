import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Input from "../UI/Input";
export default function CartProduct() {
    const Button = ({ children, btnStyle, ...props }) => {
        return <button className={`flex items-center hover:text-rose-100 text-nowrap text-sm`} {...props}>{children}</button>
    }
    const Info = ({ children }) => {
        return <span className="block text-gray-500 text-sm lg:text-base">{children}</span>
    }
    return <tr className="align-top border-b">
        <td className="sm:w-28 w-24 sm:p-2 lg:p-5 p-3 lg:w-40 ">
            <div className="truncate rounded-md w-full">
                <img src="https://img.freepik.com/free-photo/full-length-portrait-handsome-serious-man_171337-17388.jpg" className="w-full" alt="Produt" />
            </div>
        </td>
        <td className=" lg:pt-5 p-3">
            <span className="block lg:pb-4 pb-1 text-gray-600 font-semibold lg:text-xl">Dress title</span>
            <Info>size: {'XL'}</Info>
            <Info>{'When you wish well'}</Info>
            <div className="lg:pt-4 pt-1 text-gray-500 flex flex-col-reverse md:flex-row">
                <Button> <MdDelete className="me-1 text-base" /> Remove </Button>
                <span className="text-gray-300 px-2 hidden md:block">|</span>
                <Button> <FaHeart className="me-1 text-base" /> Move to wish list</Button>
            </div>
        </td>
        <td className="w-36 p-5 ">
            <Input lableName="Quantity" maxLength='3' inputId="product" labelStyle='text-base' />

            <div className="text-green-500 text-sm mt-4 ">In Stock</div>
            <span className="block lg:text-2xl text-xl font-bold  text-gray-500 mt-4">$210</span>
        </td>
    </tr>

}
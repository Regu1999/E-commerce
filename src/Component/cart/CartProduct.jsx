import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Input from "../UI/Input";
export default function CartProduct() {
    const Button = ({ children, ...props }) => {
        return <button className="flex items-center hover:text-rose-100 text-nowrap" {...props}>{children}</button>
    }
    const Info = ({ children }) => {
        return <span className="block text-gray-500">{children}</span>
    }
    return <tr className="align-top border-b">
                <td className="w-32 p-5">
                    <div className="w-28 truncate rounded-md">
                        <img src="https://img.freepik.com/free-photo/full-length-portrait-handsome-serious-man_171337-17388.jpg" className="w-full" alt="Produt" />
                    </div>
                </td>
                <td className=" pt-5 ">
                    <span className="block pb-4 text-gray-600 font-semibold text-xl">Dress title</span>
                    <Info>size: {'XL'}</Info>
                    <Info>{'When you wish well'}</Info>
                    <div className="pt-4 text-gray-500 flex">
                        <Button> <MdDelete className="me-1 text-base" /> Remove </Button>
                        <span className="text-gray-300 px-2">|</span>
                        <Button> <FaHeart className="me-1 text-base" /> Move to wish list</Button>
                    </div>
                </td>
                <td className="w-36 p-5 ">
                    <Input />

                    <div className="text-green-500 text-sm mt-4 ">In Stock</div>
                    <span className="block text-2xl font-bold  text-gray-500 mt-4">$210</span>
                </td>
            </tr>
        
}
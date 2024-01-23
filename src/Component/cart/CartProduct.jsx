import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
export default function CartProduct() {
    return <table className="table-auto w-full shadow-md mt-5">
        <tbody>
            <tr className="align-top">
                <td className="w-32 p-5">
                    <div className="w-28 truncate rounded-md">
                        <img src="https://img.freepik.com/free-photo/full-length-portrait-handsome-serious-man_171337-17388.jpg" className="w-full" alt="Produt" />
                    </div>
                </td>
                <td className=" pt-5 ">
                    <span className="block pb-4 text-gray-600 font-semibold text-xl">Dress title</span>
                    <span className="block text-gray-500">size: XL</span>
                    <span className="block text-gray-500">When you wish well</span>
                    <div className="pt-4 text-gray-500 flex">
                        <button className="flex items-center hover:text-rose-100 text-nowrap"><MdDelete className="me-1 text-base" /> Remove </button>
                        <span className="text-gray-300 px-2">|</span>
                        <button className="flex items-center hover:text-rose-100 text-nowrap"> <FaHeart className="me-1 text-base" /> Move to wish list</button>
                    </div>
                </td>
                <td className="w-36 p-5 ">
                    <div className="relative w-16 h-8">
                        <input type="text" id="dummy" className="w-full h-full border-0 border-gray-400 border-b focus:outline-0" maxLength="3" />
                        <label htmlFor="dummy" className="absolute top-1 left-0 text-gray-500">Qty</label>
                    </div>
                    <small className="text-green-500">In Stock</small>
                    <span className="block text-2xl font-bold  text-gray-500 mt-4">$210</span>
                </td>
            </tr>
        </tbody>
    </table>
}
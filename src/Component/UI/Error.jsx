import Button from "./Button"
import { FiAlertOctagon } from "react-icons/fi";
import NavBar from "../Navbar";

export default function Error({ errormessage = "File not founded 404" }) {
    return <>
        {errormessage === "File not founded 404" && <NavBar />}
        <div className="h-screen flex justify-center items-center flex-col text-center text-rose-100 animate-fade-in px-5">
            <div> <FiAlertOctagon className=" text-7xl" /></div>
            <p > <span className="block my-3 font-bold text-2xl">Woops...</span>
                {errormessage}</p>
            <Button btnStyle=" p-2 rounded my-3 bg-rose-100 text-white" onClick={() => window.location.reload(true)}>
                Try Again
            </Button>
        </div>
    </>
}
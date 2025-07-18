import { FaScissors } from "react-icons/fa6";

import Button from "./UI/Button";
import tailerImage from "/img/tailaring.png"
const CostomDesign = () => {
    return <section className="mt-10 bg-rose-100 text-center p-3 text-white h-full flex flex-col gap-5 py-5 justify-center items-center max-h-[20rem]">
            <h3 className="text-[clamp(1.5rem,3vw,4rem)] font-bold "> Want Something Unique?</h3>
            <p>Tell our sellers your idea. Get it stitched your way!</p>
            <div>
                <Button btnStyle="p-2 px-3 rounded-md"><FaScissors className="inline" /> Request Custom Order </Button>
            </div>
    </section>
}

export default CostomDesign;
import Button from "../UI/Button";
import Input from "../UI/Input";
export default function CheckOut() {
    const Heading = ({ children }) => {
        return <h3 className="text-xl font-bold text-gray-600 my-3">{children}</h3>
    }
    const Info = ({ label, value, tRowStyle, instalMents }) => {
        return <tr className={`${tRowStyle} text-gray-600`}><td>{label}</td><td className="p-3 text-end">{value} <br /> <span className="font-light">{instalMents}</span></td></tr>
    }
    return <div className="lg:w-[40rem] md:w-[30rem] p-3 self-start shadow-md">
        <Heading>The Total amount of </Heading>
        <table className="table-fixed w-full my-6 ">
            <tbody>
                <Info label={"Total"} value={"$8.21"} />
                <Info label={"Shipping"} value={"Gratis"} tRowStyle={'border-b border-gray-300'} />

                <Info label={"SubTotal"} value={"$85.2"} tRowStyle="font-bold" instalMents=" or up to 4 X $9.32 " />
            </tbody>
        </table>
        <Button btnStyle="w-full p-2 rounded-sm uppercase font-semibold">Checkout</Button>
        <div className="mt-7">
            <Heading>Apply Promo Code</Heading>
                <form className="flex gap-5 max-w-sm" >
                    <Input lableName="Code" inputId="promoCode" />
                    <Button btnStyle="px-2 rounded-md">Apply</Button>
                </form>
        </div>
    </div >
}
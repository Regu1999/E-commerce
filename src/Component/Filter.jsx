import { splitPriceRange } from '../utlity/cretePriceRange'
const CheckBox = ({ inputName }) => {
    return <div className="">
        <input type="checkbox" name={inputName} id={inputName} className="me-1" />
        <label htmlFor={inputName} className="select-none">{inputName}</label>
    </div>
}
const availabelSize = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
export default function Filter() {
    const proceRange = splitPriceRange(0,100,20);
    console.log(proceRange);
    return <div className="p-3">
        {/* <h5>Filter</h5> */}
        {/* <div> */}
        <label>Size</label>
        <section className="grid grid-cols-3 gap-1 min-w-44 mb-3">
            {availabelSize.map(size => <CheckBox inputName={size} key={size} />)}
        </section>
        <label>Price $</label>
        <section className="grid grid-cols-2 gap-1">
            {proceRange.map(price=><CheckBox inputName={price} key={price} />)}
        </section>

        {/* </div> */}
    </div>
}
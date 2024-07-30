import { splitPriceRange } from '../utlity/cretePriceRange'
const CheckBox = ({ inputName }) => {
    return <div className="">
        <input type="checkbox" name={inputName} id={inputName} className="me-1" defaultChecked/>
        <label htmlFor={inputName} className="select-none">{inputName}</label>
    </div>
}
const availabelSize = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
export default function Filter() {
    const startPrice = 0;
    const maxPrice = 100;
    const range = 20;
    const proceRange = splitPriceRange(startPrice, maxPrice, range);
    return <div className="p-3">
        <label>Size</label>
        <section className="grid grid-cols-3 gap-1 min-w-44 mb-3">
            {availabelSize.map(size => <CheckBox inputName={size} key={size} />)}
        </section>
        <label>Price $</label>
        <section className="grid grid-cols-2 gap-1">
            <form action="">
                {proceRange.map(price => <CheckBox inputName={price} key={price} />)}
            </form>
        </section>
    </div>
}
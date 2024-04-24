export default function Filter() {
    const CheckBox = ({ inputName }) => {
        return <div className="">
            <input type="checkbox" name="" id={inputName} className="me-1" />
            <label htmlFor={inputName}>{inputName}</label>
        </div>
    }
    return <div className="p-3">
        {/* <h5>Filter</h5> */}
        {/* <div> */}
        <label>Size</label>
        <section className="grid grid-cols-3 gap-1 min-w-44 mb-3">
            <CheckBox inputName='XS' />
            <CheckBox inputName='S' />
            <CheckBox inputName='M' />
            <CheckBox inputName='ML' />
            <CheckBox inputName='L' />
            <CheckBox inputName='XL' />
            <CheckBox inputName='XXL' />
        </section>
        <label>Price $</label>
        <section className="grid grid-cols-2 gap-1">
            <CheckBox inputName='5-20' />
            <CheckBox inputName='20-40' />
            <CheckBox inputName='40-60' />
            <CheckBox inputName='50-100' />
        </section>

        {/* </div> */}
    </div>
}
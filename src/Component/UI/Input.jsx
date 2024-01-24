export default function Input({...props}) {
    return <div className="relative w-24 h-8">
        <input type="text" id="dummy" {...props} placeholder=" " className="text-gray-500 peer ease-out px-2 w-full h-full border 
        border-gray-400 rounded-md focus:outline-0 focus:border-black transition-all" maxLength='3' />
        
        <label htmlFor="dummy" className="absolute translate-y-[-35%] scale-[.7] top-0 origin-top-left left-2 bg-white px-1 text-gray-400 
        peer-focus:top-0 peer-focus:translate-y-[-35%] peer-focus:scale-[.7] peer-focus:text-black transition-all ease-out delay-100
        peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1 peer-placeholder-shown:translate-y-[0]">Quantity</label>
    </div>
}
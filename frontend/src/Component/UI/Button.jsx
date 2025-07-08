export default function Button({ children, btnStyle, ...props }) {
    return (
        <button className={`w-100 bg-black text-white hover:bg-rose-100 duration-300  ${btnStyle} `} {...props}>{children}</button>
    )
}
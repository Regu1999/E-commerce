export default function Button({ children, btnStyle, ...props }) {
    return (
        <button className={`w-100 bg-black text-white  ${btnStyle} `} {...props}>{children}</button>
    )
}
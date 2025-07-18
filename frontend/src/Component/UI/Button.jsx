import { motion } from 'motion/react'
export default function Button({ children, btnStyle, ...props }) {
    return (
        <motion.button
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.2 }}
            className={`w-100 bg-black text-white hover:bg-rose-100 duration-300  ${btnStyle} `} {...props}>{children}</motion.button>
    )
}
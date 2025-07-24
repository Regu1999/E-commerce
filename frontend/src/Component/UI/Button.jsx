import { motion } from 'motion/react'
export default function Button({ children, btnStyle, ...props }) {
    return (
        <motion.button
            whileHover="hover"
            whileTap={{
                scale:.90
            }}
            initial="initial"
            className={`w-100 relative overflow-hidden border-[.5px] border-transparent z-0 hover:border-black bg-black  text-white ${btnStyle} `} {...props}>
            <span className="relative z-10">
                {children}
            </span>
            <motion.span
                variants={{
                    initial: { height: 0, left: "100%" },
                    hover: { height: "100%", left: 0 },
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute left-0 bottom-0 w-full h-full bg-rose-500 z-0"
                style={{ originX: 1, originY: 1 }}
            />
        </motion.button>
    )
}
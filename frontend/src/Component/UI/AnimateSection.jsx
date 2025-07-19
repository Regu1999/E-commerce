import { motion } from 'motion/react'
const AnimateSection = ({ children, className }) => {
    return <motion.section
        initial={{ y: '20px', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .2}}
        className={className}>
        {children}
    </motion.section>
}
export default AnimateSection
import { motion } from 'motion/react'
import Button from "./UI/Button"
import AnimateSection from './UI/AnimateSection';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.20,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const bannerText = "Discover Unique Dressesb from Independent Designers!"

const HomeBanner = () => {
    return <AnimateSection className="grid grid-cols-1 py-3 min-h-[15rem] min-[640px]:min-h-[30rem]  
    min-[640px]:grid-cols-2 items-center min-[640px]:h-[calc(100vh-4rem)] 
    max-[640px]:bg-[url('/img/banner-6.png')] min-[640px]:bg-[url('/img/banner-1.png')] 
    bg-cover bg-no-repeat  w-full">
        <div className="mx-2 md:mx-8">
            <div className="mb-5 text-[#FFEAEA] font-serif max-[640px]:text-center">
                <motion.h3
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="inline-block text-[clamp(1rem,2vw,1.5rem)] font-semibold mb-2 tracking-wide 
                leading-tight max-[640px]:text-2xl max-w-[70%]">{bannerText.split(" ").map((word, index) => (
                        <motion.span key={index} variants={childVariants}>
                            {word + " "}
                        </motion.span>
                    ))}</motion.h3>
                <motion.p
                    initial={{ filter: 'blur(20px)', opacity: 0 }}
                    animate={{ filter: 'blur(0px)', opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="animate-bounce">"Style That Speaks"</motion.p>
            </div>
            <div className="flex gap-3 max-[640px]:justify-center">
                <Button btnStyle="p-1 px-2 text-[#FFEAEA] rounded-md 
                md:text-[clamp(.5rem,2vw,1rem)]">Shop Now</Button>
                <Button btnStyle="p-1 px-2 text-[#FFEAEA] 
                rounded-md md:text-[clamp(.5rem,2vw,1rem)]">Become a Seller</Button>
            </div>
        </div>
    </AnimateSection>
}
export default HomeBanner
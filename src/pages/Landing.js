import { motion } from 'framer-motion'
import {MidBox,TopBox,BottomBox} from '../components'


const Landing = () => {



    return (
        <>
            <motion.main animate={{opacity: 1, y:0}} initial={{opacity: 0, y: [100,0]}} exit={{opacity: 0}} transition={{duration: .4}}>


                <TopBox/>
                <MidBox/>
                <BottomBox/>
            </motion.main>


        </>
    )
}
export default Landing;
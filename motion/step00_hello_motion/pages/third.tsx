import type { NextPage } from 'next';
import { motion } from 'framer-motion';


const Third: NextPage = () => {
  return (
    <motion.div 
        initial={{
            opacity: 0.1
        }}

        animate={{
            opacity: 1
        }}
    >
        Weeee I'm animated
    </motion.div>
  )
}

export default Third
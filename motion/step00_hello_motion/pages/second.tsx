import type { NextPage } from 'next';
import { motion } from 'framer-motion';


const Second: NextPage = () => {
  return (
    <motion.div 
    animate={{
        x: ['100px', '0px', '100px']  
      }}
    >
    Weeee I'm animated
    </motion.div>
  )
}

export default Second

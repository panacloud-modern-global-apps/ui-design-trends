import type { NextPage } from 'next';
import { motion } from 'framer-motion';


const First: NextPage = () => {
  return (
    <motion.div 
      animate={{
        x: '100px'    
      }}
    >
    Weeee I'm animated
    </motion.div>
  )
}

export default First

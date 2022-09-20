import type { NextPage } from 'next';
import { motion } from 'framer-motion';


const Fourth: NextPage = () => {
  return (
    <motion.div 
      animate={{
        x: '100px'    
      }}

      transition={{
        type: 'tween',
        duration: 2
      }}
    >
    Weeee I'm animated
    </motion.div>
  )
}

export default Fourth

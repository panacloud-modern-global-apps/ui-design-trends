import type { NextPage } from 'next';
import { VStack, Button, Box} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
      <Box
        as={motion.div}
        height='40px'
        width='40px'
        bg='orange.400'
        drag='x'
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition='0.5s linear'
      />
  )
}

export default Home
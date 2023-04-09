import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center text-left overflow-hidden">
      <motion.h2
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block text-7xl font-bold text-dark dark:text-light capitalize ${className}`}>
        {text.split(' ').map((word, index) => (
          <motion.span
            variants={singleWord}
            className="inline-block"
            key={index}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default AnimatedText;

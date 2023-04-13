import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex justify-center items-center mt-2">
      <MotionLink
        href="/"
        className="w-16 md:w-10 h-16 md:h-10 bg-dark text-light border border-solid border-transparent dark:border-light flex justify-center items-center rounded-full text-xl md:text-lg font-bold md:font-semibold md:p-1"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}>
        MSI
      </MotionLink>
    </div>
  );
};

export default Logo;

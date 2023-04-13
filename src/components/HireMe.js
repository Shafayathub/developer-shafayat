import Link from 'next/link';
import React from 'react';
import { CircularText } from './Icons';

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 md:right-4 md:left-auto md:top-0 md:bottom-auto flex items-center justify-center">
      <div className="w-48 md:w-24 h-auto flex items-center justify-center relative">
        <CircularText
          className={
            'fill-dark dark:fill-light dark:bg-dark animate-spin-slow bg-light rounded-full'
          }
        />
        <Link
          href="https://www.linkedin.com/in/md-shafayat-islam-97000110b/"
          target="_blank"
          className="flex justify-center items-center absolute bg-dark text-light border border-solid border-dark w-20 md:w-10 h-20 md:h-10 md:text-[8px] rounded-full">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

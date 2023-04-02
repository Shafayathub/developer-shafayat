import Link from 'next/link';
import React from 'react';
import { CircularText } from './Icons';

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText
          className={'fill-dark animate-spin-slow bg-light rounded-full'}
        />
        <Link
          href="/"
          className="flex justify-center items-center absolute bg-dark text-light border border-solid border-dark w-20 h-20 rounded-full">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

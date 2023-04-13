import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <main
      className={`w-full h-full inline-block bg-light z-0 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 dark:bg-dark ${className}`}>
      {children}
    </main>
  );
};

export default Layout;

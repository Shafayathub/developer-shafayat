import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import WhatsAppIcon, {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from './Icons';
import Logo from './Logo';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();
  const handleMobileClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleMobileClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-dark`}>
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className="p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8  py-8 font-medium flex justify-between items-center dark:text-light relative z-10">
      <button
        className="hidden lg:flex flex-col justify-center items-center"
        onClick={handleClick}>
        <span
          className={`block bg-dark dark:bg-light h-0.5 w-6 rounded-sm ${
            open ? 'rotate-45 translate-y-1' : '-translate-y-1'
          }`}></span>
        <span
          className={`block bg-dark dark:bg-light h-0.5 w-6 rounded-sm ${
            open ? 'opacity-0' : 'opacity-100'
          }`}></span>
        <span
          className={`block bg-dark dark:bg-light h-0.5 w-6 rounded-sm ${
            open ? '-rotate-45 -translate-y-1' : 'translate-y-1'
          }`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://wa.me/8801718053201"
            target={'_blank'}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <WhatsAppIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Shafayathub"
            target={'_blank'}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/md-shafayat-islam-97000110b/"
            target={'_blank'}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}>
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className="ml-4">
            {mode === 'dark' ? (
              <MoonIcon className={'fill-dark'} />
            ) : (
              <SunIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>
      {/* mobile menu */}
      {open ? (
        <div className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/80 backdrop-blur-md py-32 rounded-lg">
          <nav className="flex flex-col justify-center items-center">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://wa.me/8801718053201"
              target={'_blank'}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}>
              <WhatsAppIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Shafayathub"
              target={'_blank'}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}>
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/md-shafayat-islam-97000110b/"
              target={'_blank'}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}>
              <LinkedInIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className="ml-4">
              {mode === 'dark' ? (
                <MoonIcon className={' bg-dark rounded-full'} />
              ) : (
                <SunIcon className={' bg-light rounded-full'} />
              )}
            </button>
          </nav>
        </div>
      ) : null}
      <div className="absolute left-[50%] md:right-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;

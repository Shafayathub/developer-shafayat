import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import WhatsAppIcon, {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from './Icons';
import Logo from './Logo';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}>
        &nbsp;
      </span>
    </Link>
  );
};
const NavBar = () => {
  return (
    <header className="md:px-8 lg:px-32 py-8 font-medium flex justify-between items-center">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/project" title="Projects" className="mx-4" />
        <CustomLink href="/blogs" title="Blogs" className="ml-4" />
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
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;

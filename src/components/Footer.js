import Link from 'next/link';
import React from 'react';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light text-lg font-medium">
      <Layout className="py-8 flex items-center dark:text-light justify-between">
        <span>&#169;{`copyright 2023 - ${new Date().getFullYear()}`}</span>
        <Link href="/">MD Shafayat Islam</Link>
        <Link
          className="underline"
          href="https://wa.me/8801718053201"
          target={'_blank'}>
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/images/profile/developer-shafayat.png';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>MD Shafayat Islam | Web Developer</title>
        <meta
          name="description"
          content="I am MD Shafayat Islam a full stack Web Developer. I enjoy working with clients
                who appreciate quality. A self-taught Web developer since 2022
                and an enthusiastic explorer in this field. Learning and
                developing skills on a regular basis. I love to learn and apply
                any updated technology to make Web Applications perform better."
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="MD Shafayat Islam"
                className="w-full h-auto"
              />
              <h1 className="text-dark font-medium text-center">
                MD Shafayat Islam (MSI)
              </h1>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Turning Vision Into Reality With Code." />
              <p className="text-base font-medium">
                I am a full stack Web Developer. A self-taught Web developer
                since 2022 and an enthusiastic explorer in this field. Learning
                and developing skills on a regular basis. I love to learn and
                apply any updated technology to make Web Applications perform
                better.
              </p>
              <div className="flex items-center self-start mt-3">
                <Link
                  href="/Md-Shafayat-Islam-Resume.pdf"
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark">
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="https://wa.me/8801718053201"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium text-dark capitalize underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="Light-Bulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}

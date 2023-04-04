import AnimatedText from '@/components/AnimatedText';
import Education from '@/components/Education';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import profilePic from '../../public/images/profile/developer-shafayat-2.jpg';

const about = () => {
  return (
    <>
      <Head>
        <title>About | MD Shafayat Islam | Web Developer</title>
        <meta
          name="description"
          content="I am MD Shafayat Islam a full stack Web Developer. I enjoy working with clients
                who appreciate quality. A self-taught Web developer since 2022
                and an enthusiastic explorer in this field. Learning and
                developing skills on a regular basis. I love to learn and apply
                any updated technology to make Web Applications perform better."
        />
      </Head>
      <main className="w-full flex flex-col items-center justify-center pb-8">
        <Layout>
          <AnimatedText text="Passion Fuels Purpose!" className="!text-8xl" />
          <div className="w-full grid grid-cols-8 gap-16 mt-5">
            <div className="col-span-3 flex flex-col justify-start items-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark">
                Biography
              </h2>
              <p className="font-medium">
                Full Stack Web Developer | Next js | Custom Website. <br /> I am
                a full stack Web Developer who loves to use the most-performing
                MERN stack. I enjoy working with clients who appreciate quality.
                A self-taught Web developer since 2022 and an enthusiastic
                explorer in this field. I have worked on small to medium Web
                Applications and satisfyingly fulfilled clients&apos; realistic
                requirements.
              </p>
              <p className="my-4 font-medium">
                My Skillset:
                <br /> ✅Javascript <br /> ✅React JS
                <br /> ✅Next JS <br /> ✅Sanity.io <br /> ✅Express JS <br />{' '}
                ✅Node JS <br />
                ✅MongoDB <br /> ✅HTML5 <br /> ✅CSS3 <br /> ✅Deployment
              </p>
              <p className="font-medium">
                Learning and developing skills on a regular basis. I love to
                learn and apply any updated technology to make Web Applications
                perform better.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 bg-light border-dark p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark rounded-2xl" />
              <Image
                src={profilePic}
                alt="MD Shafayat Islam"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-between items-start">
              <div className="flex flex-col justify-center items-end">
                <span className="inline-block text-6xl font-bold">2+ year</span>
                <h3 className="text-xl font-semibold">Comprehensive Learing</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="inline-block text-6xl font-bold">40+</span>
                <h3 className="text-xl font-semibold">Projects completed</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="inline-block text-6xl font-bold">1+ year</span>
                <h3 className="text-xl font-semibold">
                  Local market Projects experience
                </h3>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;

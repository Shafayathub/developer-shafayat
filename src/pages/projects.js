import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/doctors_website.jpg';
import project2 from '../../public/images/projects/developer_portfolio.jpg';
import project3 from '../../public/images/projects/electronics_inventory.jpg';
import project4 from '../../public/images/projects/the_car_doctor.jpg';
import project5 from '../../public/images/projects/Wellness_clinic.jpg';
import project6 from '../../public/images/projects/Panda_ecommerce.jpg';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="p-12 lg:p-8 w-full flex lg:flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-2">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 border bg-dark text-light p-2 px-4 rounded-lg text-lg font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="p-6 lg:p-2 w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <div className="mt-4 w-full flex flex-col items-start justify-between pl-6 md:pl-2">
        <span className="text-primary font-medium text-xl md:text-lg">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl sm:text-lg font-bold">
            {title}
          </h2>
        </Link>
        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg sm:text-base font-semibold">
            Visit Project
          </Link>
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | MD Shafayat Islam | Web Developer</title>
        <meta
          name="description"
          content="I am MD Shafayat Islam a full stack Web Developer. I enjoy working with clients
                who appreciate quality. A self-taught Web developer since 2022
                and an enthusiastic explorer in this field. Learning and
                developing skills on a regular basis. I love to learn and apply
                any updated technology to make Web Applications perform better."
        />
      </Head>
      <main className="mb-16 w-full flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-16 lg:gap-8 sm:gap-x-2 sm:gap-y-8">
            <div className="col-span-12">
              <FeaturedProject
                title="Doctors Portal"
                summary="This website is build with react JS and express JS is handling its CRUD operations and MongoDB is storing data."
                link="https://doctors-website-a30c7.web.app/"
                github="https://github.com/Shafayathub/doctors-website"
                type="Featured Project"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Electronic Inventory"
                link="https://electronic-envantory.web.app/"
                github="https://github.com/Shafayathub/electronics-envantory"
                type="Featured Project"
                img={project3}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="The Car Doctor"
                link="https://genius-car-6c9b1.web.app/"
                github="https://github.com/Shafayathub/react-car-servicing"
                type="Featured Project"
                img={project4}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Developers Portfolio"
                summary="A feature-rich Portfolio Web App using Next.JS, Tailwind CSS, Framer motion."
                link="/"
                github="https://github.com/Shafayathub/developer-shafayat"
                type="Featured Project"
                img={project2}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Wellness Clinic"
                link="https://wellness-clinic-a3745.web.app/"
                github="https://github.com/Shafayathub/wellness-clinic"
                type="Featured Project"
                img={project5}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Panda E-Commerce"
                link="https://shafa-commerce.netlify.app/"
                github="https://github.com/Shafayathub/panda-commerce"
                type="Featured Project"
                img={project6}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

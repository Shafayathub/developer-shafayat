import React from 'react';
import { createClient } from 'next-sanity';

import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';

const blog = ({ blogs }) => {
  console.log(blogs);
  return (
    <>
      <Head>
        <title>Blogs | MD Shafayat Islam | Web Developer</title>
        <meta
          name="description"
          content="I am MD Shafayat Islam a full stack Web Developer. I enjoy working with clients
                who appreciate quality. A self-taught Web developer since 2022
                and an enthusiastic explorer in this field. Learning and
                developing skills on a regular basis. I love to learn and apply
                any updated technology to make Web Applications perform better."
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Words have the power to make a change!" />

          <section className="grid grid-cols-2 gap-16 mt-16">
            {blogs.map((item) => (
              <div key={item?.slug?.current}>
                <Link
                  href={`/blogpost/${item?.slug?.current}`}
                  target="_blank"
                  className="w-full cursor-pointer overflow-hidden rounded-lg">
                  Image
                </Link>
                <Link href={`/blogpost/${item?.slug?.current}`} target="_blank">
                  <h1 className="capitalize text-2xl font-bold my-2">
                    {item?.title}
                  </h1>
                </Link>
                <Link href={`/blogpost/${item?.slug?.current}`}>Read more</Link>
                <br />

                <span className="text-primary font-semibold">
                  {item?.createdAt}
                </span>
              </div>
            ))}
          </section>
        </Layout>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const client = createClient({
    projectId: 'dquhg20o',
    dataset: 'production',
    useCdn: false,
  });
  const blogs = await client.fetch(`*[_type == "blog"]`);

  return {
    props: {
      blogs,
    },
  };
}

export default blog;

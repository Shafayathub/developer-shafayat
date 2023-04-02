import React from 'react';
import { createClient } from 'next-sanity';
import PortableText from 'react-portable-text';
import Head from 'next/head';

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
      <section className="p-32">
        <PortableText
          // Pass in block content straight from Sanity.io
          content={blogs[0].content}
          projectId="dquhg20o"
          dataset="production"
          // Optionally override marks, decorators, blocks, etc. in a flat
          // structure without doing any gymnastics
          serializers={{
            h1: (props) => <h1 {...props} />,
            li: ({ children }) => (
              <li className="special-list-item">{children}</li>
            ),
          }}
        />
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const client = createClient({
    projectId: 'dquhg20o',
    dataset: 'production',
    useCdn: false,
  });
  const blogs = await client.fetch(`*[_type == "Blog"]`);

  return {
    props: {
      blogs,
    },
  };
}

export default blog;

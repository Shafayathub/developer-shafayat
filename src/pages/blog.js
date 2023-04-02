import React from 'react';
import { createClient } from 'next-sanity';
import PortableText from 'react-portable-text';

const blog = ({ blogs }) => {
  console.log(blogs);
  return (
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

import { createClient } from 'next-sanity';
import { useRouter } from 'next/router';
import PortableText from 'react-portable-text';

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

const Post = ({ blogs }) => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.find((blog) => blog?.slug?.current === slug);

  return (
    <main className="p-32">
      Post: {slug}
      <br />
      <PortableText
        // Pass in block content straight from Sanity.io
        content={blog.content}
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
    </main>
  );
};

export default Post;

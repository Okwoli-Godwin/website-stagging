import RelatedBlogPost from '@/app/blog/_components/related-blog-posts';
import BlogDetails from '@/app/blog/[id]/_components/blog-details';

const SingleBlogPost = () => {
  return (
    <main className='w-full h-auto space-y-16'>
      <BlogDetails />
      <RelatedBlogPost />
    </main>
  );
};

export default SingleBlogPost;

import BlogCard from '@/app/blog/_components/blog-card';

const RelatedBlogPost = () => {
  return (
    <section>
      <div className='container'>
        <div className='max-w-7xl mx-auto space-y-5'>
          <h3>Related Blog Posts</h3>

          <div className='grid grid-col-1 lg:grid-cols-2 gap-4 pb-20'>
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogPost;

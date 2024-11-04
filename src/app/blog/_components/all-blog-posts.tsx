import Pagination from '@/components/pagination';

import BlogCard from '@/app/blog/_components/blog-card';

const AllBlogPosts = () => {
  return (
    <section className='w-full bg-white pt-8 pb-10'>
      <div className='container'>
        <div className='max-w-7xl mx-auto space-y-5'>
          <h3>All Blog Posts</h3>

          <div className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-4'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default AllBlogPosts;

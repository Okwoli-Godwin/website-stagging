import { Metadata } from 'next';

import AllBlogPosts from '@/app/blog/_components/all-blog-posts';
import RecentBlogPosts from '@/app/blog/_components/recent-blog-posts';

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: `%s | FollowUp`,
  },
  description: 'FollowUp Blog',
};

const Blog = () => {
  return (
    <main className='w-full h-auto'>
      <RecentBlogPosts />
      <AllBlogPosts />
    </main>
  );
};

export default Blog;

import { ArrowUpRight } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import RecentBlogPostImage from '~/images/recent-blog-post.jpg';

const BlogCard = () => {
  return (
    <div className='flex flex-col gap-2 lg:gap-3 xl:gap-6'>
      <div className='w-full aspect-[2.29] relative rounded-xl overflow-hidden'>
        <Image
          src={RecentBlogPostImage}
          alt='Recent Blog Post Image'
          // width={619}
          // height={270}
          className='w-full h-auto object-cover'
          placeholder='blur'
          fill
        />
      </div>

      <div className='space-y-2 lg:space-y-3 xl:space-y-5'>
        <p className='text-sm font-semibold'>
          <span className='text-primary-green'>Demi Wilkinson &bull;</span>{' '}
          {moment().format('DD MMM YYYY')}
        </p>

        <h3 className='flex justify-between items-center'>
          Office ipsum you must be muted. Pin red-flag.{' '}
          <Link className='flex-shrink-0' href='/blog/id'>
            <ArrowUpRight />
          </Link>
        </h3>
        <p className='text-light-gray'>
          Office ipsum you must be muted. Nobody we customer fured economy
          request impact. Eco-system hill today move later. Hiring viral keep
          tiger just scope hands.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

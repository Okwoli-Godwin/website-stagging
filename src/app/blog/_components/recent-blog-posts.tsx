import { ArrowUpRight } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import RecentBlogPostImage from '~/images/recent-blog-post.jpg';
const RecentBlogPosts = () => {
  return (
    <section className='w-full bg-white pt-8 mb-10'>
      <div className='container'>
        <div className='max-w-7xl mx-auto space-y-5'>
          <h3>Recent Blog Posts</h3>

          <div className='w-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:gap-4'>
            <div className='col-start-1 col-span-1 row-start-1 row-span-2 flex flex-col gap-2 lg:gap-3 xl:gap-6'>
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
                  <span className='text-primary-green'>
                    Demi Wilkinson &bull;
                  </span>{' '}
                  {moment().format('DD MMM YYYY')}
                </p>

                <h3 className='flex justify-between items-center'>
                  Office ipsum you must be muted. Pin red-flag.{' '}
                  <Link className='flex-shrink-0' href='/blog/id'>
                    <ArrowUpRight />
                  </Link>
                </h3>
                <p className='text-light-gray'>
                  Office ipsum you must be muted. Nobody we customer fured
                  economy request impact. Eco-system hill today move later.
                  Hiring viral keep tiger just scope hands.
                </p>
              </div>
            </div>
            <div className='col-start-2 col-span-1 row-start-1 row-span-1 flex flex-col lg:grid grid-cols-2 gap-2 lg:gap-4'>
              <div className='w-full aspect-[2.29] h-full relative rounded-lg overflow-hidden'>
                <Image
                  src={RecentBlogPostImage}
                  alt='Recent Blog Post Image'
                  className='w-full h-auto object-cover'
                  placeholder='blur'
                  fill
                />
              </div>

              <div className='space-y-2 lg:space-y-3 xl:space-y-4'>
                <p className='text-sm font-semibold'>
                  <span className='text-primary-green'>Candice Wu &bull;</span>{' '}
                  {moment().format('DD MMM YYYY')}
                </p>

                <h4 className='text-lg lg:w-5/6'>
                  Office ipsum you must be muted. Winning busy dear.
                </h4>
                <p className='text-light-gray lg:w-5/6'>
                  Office ipsum you must be muted. Already follow emails lift
                  panel technologically growth lot.
                </p>
              </div>
            </div>
            <div className='col-start-2 col-span-1 row-start-2 row-span-1 flex flex-col lg:grid grid-cols-2 gap-2 lg:gap-4'>
              <div className='w-full h-full aspect-[2.29] relative rounded-lg overflow-hidden'>
                <Image
                  src={RecentBlogPostImage}
                  alt='Recent Blog Post Image'
                  className='w-full h-auto object-cover'
                  placeholder='blur'
                  fill
                />
              </div>

              <div className='space-y-4'>
                <p className='text-sm font-semibold'>
                  <span className='text-primary-green'>Candice Wu &bull;</span>{' '}
                  {moment().format('DD MMM YYYY')}
                </p>

                <h4 className='text-lg w-5/6'>
                  Office ipsum you must be muted. Paradigm culture down.
                </h4>
                <p className='text-light-gray w-5/6'>
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and manag...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;

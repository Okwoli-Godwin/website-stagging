import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles/reviews.scss';

import QuoteIcon from '@/components/icons/QuoteIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import BoxReveal from '@/components/ui/box-reveal';

const reviews = [
  {
    title:
      'Office ipsum ❤️ you must be muted. Strategies needed quick-win break emails awareness. High lot this request whistles re-inventing.',
    name: 'TheArtist Abhi',
  },
  {
    title:
      'Office ipsum ❤️ you must be muted. Strategies needed quick-win break emails awareness. High lot this request whistles re-inventing.',
    name: 'TheArtist Abhi',
  },
  {
    title:
      'Office ipsum ❤️ you must be muted. Strategies needed quick-win break emails awareness. High lot this request whistles re-inventing.',
    name: 'TheArtist Abhi',
  },
  {
    title:
      'Office ipsum ❤️ you must be muted. Strategies needed quick-win break emails awareness. High lot this request whistles re-inventing.',
    name: 'TheArtist Abhi',
  },
  {
    title:
      'Office ipsum ❤️ you must be muted. Strategies needed quick-win break emails awareness. High lot this request whistles re-inventing.',
    name: 'TheArtist Abhi',
  },
];

const Reviews = () => {
  return (
    <section className='w-full bg-white py-28'>
      <div className='container'>
        <div className='max-w-7xl mx-auto'>
          <QuoteIcon className='text-7xl block mx-auto' />
          <div className='flex justify-center'>
            <BoxReveal>
              <h1 className='text-center mt-8'>
                Check What Our Users Say About Us
              </h1>
            </BoxReveal>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides
            roundLengths
            loop
            className='mt-10 reviews'
            modules={[Pagination, Mousewheel, Keyboard, Autoplay, Navigation]}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 3,
              releaseOnEdges: true,
            }}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              768: {
                spaceBetween: 20,
                allowTouchMove: true,
                slidesPerView: 1.5,
              },
              1024: {
                spaceBetween: 20,
                allowTouchMove: true,
                slidesPerView: 2,
              },
              1280: {
                spaceBetween: 20,
                allowTouchMove: true,
                slidesPerView: 2.5,
              },
            }}
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className='slide flex flex-col items-center gap-4 p-4 md:px-5 md:py-8 shadow rounded-3xl'>
                  <p className='h3 font-semibold text-center'>{review.title}</p>
                  <div className='flex items-center gap-3'>
                    <Avatar>
                      <AvatarImage src='/images/avatar.jpg' />
                      <AvatarFallback>TA</AvatarFallback>
                    </Avatar>
                    <p className='text-lg font-medium'>{review.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className='flex mt-6 justify-center gap-6'>
              <div className='p-3 rounded-full bg-primary-green text-white swiper-button-prev'>
                <ArrowLeft />
              </div>
              <div className='p-3 rounded-full bg-primary-green text-white swiper-button-next'>
                <ArrowRight />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

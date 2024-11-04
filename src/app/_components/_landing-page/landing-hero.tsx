import Image from 'next/image';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import '../_landing-page/styles/landing-hero.scss';

import ButtonLink from '@/components/links/ButtonLink';
import DotPattern from '@/components/ui/dot-pattern';
import SparklesText from '@/components/ui/sparkles-text';
import WordFadeIn from '@/components/ui/word-fade-in';

import MeditationImage from '~/images/hero-meditation.jpg';
import MeditationImage2 from '~/images/hero-meditation-2.jpg';
import MeditationImage3 from '~/images/hero-meditation-3.jpg';

const LandingHero = () => {
  return (
    <section className='w-full container flex items-center justify-center min-h-screen lg:py-8 py-28 max-h-[1024px]'>
      <div className='max-w-7xl grid lg:grid-cols-2 mx-auto gap-6 lg:gap-0'>
        <div className='flex flex-col gap-4 justify-center text-center lg:text-left'>
          <h1 className='h0 lg:leading-tight'>
            <span className='font-normal'>Embrace</span>{' '}
            <span className='font-bold'>
              your <br /> Journey:
            </span>{' '}
            <span className='font-normal'>Elevate Your</span>{' '}
            <span className='font-bold text-primary-green'>
              <SparklesText text='Well-Being' />
            </span>
          </h1>

          <p className='h4 max-w-md lg:max-w-full max-w- w-4/5 mx-auto lg:mx-0 font-normal'>
            <WordFadeIn
              words='At FollowUp, we’re here to guide you on your unique wellness journey. 
              Our platform offers personalized tools, expert support, and a comprehensive 
              approach to holistic well-being. Elevate your potential, overcome challenges, 
              and discover a more balanced, empowered you with FollowUp by your side.'
              delay={0.1}
            />
          </p>

          <div>
            <ButtonLink href='/signup' className='py-3.5 px-6'>
              Get Started
            </ButtonLink>
          </div>
        </div>

        <div className='flex justify-end'>
          <div className='grid grid-cols-[90%_1fr] w-full max-w-[75vw] lg:w-full mx-auto lg:mx-0 lg:max-w-md gap-3'>
            <div className='relative w-full aspect-[613/663]'>
              <Swiper
                slidesPerView={1}
                modules={[Pagination, Autoplay, EffectFade]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  el: '.hero-pagination-bullet',
                  type: 'bullets',
                  clickable: true,
                }}
                loop
                effect='fade'
                className='size-full'
              >
                <SwiperSlide className='size-full'>
                  <div className='w-full h-full overflow-hidden relative rounded-tl-3xl rounded-bl-3xl'>
                    <Image
                      src={MeditationImage}
                      fill
                      alt='Meditation image'
                      className='w-full aspect-auto h-auto object-cover'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='size-full'>
                  <div className='w-full h-full overflow-hidden relative rounded-tl-3xl rounded-bl-3xl'>
                    <Image
                      src={MeditationImage2}
                      fill
                      alt='Meditation image'
                      className='w-full aspect-auto h-auto object-cover'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className='size-full'>
                  <div className='w-full h-full overflow-hidden relative rounded-tl-3xl rounded-bl-3xl'>
                    <Image
                      src={MeditationImage3}
                      fill
                      alt='Meditation image'
                      className='w-full aspect-auto h-auto object-cover'
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* bg-[linear-gradient(270deg,_rgba(22,_192,_152,_0.3)_0%,_rgba(22,_192,_152,_0)_100%)] */}
              <div className='h-full absolute w-2/5 right-0 z-10 bg-[linear-gradient(270deg,_rgba(22,_192,_152,_0.3)_0%,_rgba(22,_192,_152,_0)_100%)] top-0'></div>
              <div className='w-1/12 h-1/6 absolute top-0 right-full'>
                <DotPattern
                  width={10}
                  height={10}
                  cx='5%'
                  cy='5%'
                  cr='3%'
                  className='fill-light-green w-full h-full'
                />
              </div>

              <div className='w-1/12 absolute top-[2%] z-10 left-0 -translate-x-1/2 aspect-square bg-primary-green'></div>
              <div className='w-2/12 absolute z-10 bottom-[calc(1.25rem+15.5%)] rounded-br-full left-0 -translate-x-1/2 aspect-square bg-primary-green'></div>
              <div className='w-2/12 absolute z-10 bottom-5 left-0 -translate-x-1/2 aspect-square bg-light-green'></div>
            </div>

            <div className='flex items-center h-full justify-end flex-col gap-3 hero-pagination-bullet'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;

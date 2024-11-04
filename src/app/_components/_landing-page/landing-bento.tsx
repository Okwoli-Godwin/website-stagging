import { cn } from '@/lib/utils';

import HandHealthIcon from '@/components/icons/HandHealthIcon';
import BlurFade from '@/components/ui/blur-fade';
import BoxReveal from '@/components/ui/box-reveal';
import ScrollImageScale from '@/components/ui/scroll-image-scale';

import BentoImage1 from '~/images/bento-image-1.jpg';
import BentoImage2 from '~/images/bento-image-2.jpg';

const gridCards = [
  {
    id: 1,
    icon: HandHealthIcon,
    title: 'Office ipsum you must be muted.',
    description: 'Easy collateral-free term loans with quick disbursal',
    className: 'row-start-3 row-span-1 col-start-1',
  },
  {
    id: 2,
    icon: HandHealthIcon,
    title: 'Office ipsum you.',
    description: 'Easy collateral-free term loans with quick disbursal',
    className: 'row-start-1 row-span-1 col-start-2',
  },
  {
    id: 3,
    icon: HandHealthIcon,
    title: 'Office ipsum you.',
    description: 'All your business transactions are in line, and auto-matched',
    className: 'row-start-2 row-span-1 col-start-2',
  },
  {
    id: 4,
    icon: HandHealthIcon,
    title: 'Office ipsum you.',
    description: 'All your business transactions are in line, and auto-matched',
    className: 'row-start-3 row-span-1 col-start-2',
  },
  {
    id: 5,
    icon: HandHealthIcon,
    title: 'Office ipsum you must be muted.',
    description:
      'Fast and easy vendor payments and collections through the app',
    className: 'row-start-1 row-span-1 col-start-3',
  },
];

const LandingBento = () => {
  return (
    <section className='w-full bg-white py-28'>
      <div className='container'>
        <div className='max-w-7xl mx-auto'>
          <BoxReveal>
            <h1 className='px-6 border-l-4 border-primary-green'>
              <span className='text-primary-green'>Office Ipsum </span>
              <span>
                You Must <br className='hidden lg:block' /> Be Muted
              </span>
            </h1>
          </BoxReveal>
          <div className='flex flex-col mt-16 lg:grid grid-cols-3 grid-rows-3 gap-6'>
            <div className='row-start-1 row-span-2 max-w-sm mx-auto lg:max-w-full'>
              <ScrollImageScale
                imageProps={{
                  alt: 'Meditation',
                  src: BentoImage1,
                  width: 388,
                  height: 584.45,
                  className: 'w-full h-auto',
                  placeholder: 'blur',
                }}
                containerProps={{
                  className: 'overflow-hidden rounded-2xl',
                }}
              />
            </div>
            {gridCards.map(
              ({ className, description, icon: Icon, id, title }, idx) => {
                return (
                  <BlurFade
                    key={id}
                    className={cn(
                      'border rounded-3xl border-[#D4D4D4B2]/70 flex flex-col gap-4 p-8 max-w-sm mx-auto lg:max-w-full',
                      className
                    )}
                    delay={0.5 + idx * 0.05}
                    inView
                  >
                    <div className='text-4xl'>
                      <Icon />
                    </div>

                    <h2>{title}</h2>

                    <p className='w-4/5 text-[#6B6B6B]'>{description}</p>
                  </BlurFade>
                );
              }
            )}
            <div className='row-start-2 row-span-2 col-start-3 max-w-sm mx-auto lg:max-w-full'>
              <ScrollImageScale
                imageProps={{
                  alt: 'Meditation',
                  src: BentoImage2,
                  width: 388,
                  height: 584.45,
                  className: 'w-full h-auto',
                  placeholder: 'blur',
                }}
                containerProps={{
                  className: 'overflow-hidden rounded-2xl',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBento;

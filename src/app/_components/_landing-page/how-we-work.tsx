import FileIcon from '@/components/icons/FileIcon';
import HandHealthIcon from '@/components/icons/HandHealthIcon';
import ShieldIcon from '@/components/icons/ShieldIcon';
import BlurFade from '@/components/ui/blur-fade';
import BoxReveal from '@/components/ui/box-reveal';
import { MagicCard } from '@/components/ui/magic-card';

const howWeWorkData = [
  {
    id: 1,
    icon: HandHealthIcon,
    title: 'Get Started:',
    description:
      "Sign up and dive into your wellness journey.",
  },

  {
    id: 2,
    icon: FileIcon,
    title: 'Identify Your Challenges:',
    description: 'Pinpoint the areas where you need support.',
  },

  {
    id: 3,
    icon: ShieldIcon,
    title: 'Choose Your Expert:',
    description: 'Connect with a specialist and start your personalized sessions.',
  },

  {
    id: 3,
    icon: ShieldIcon,
    title: 'Track Your Wins:',
    description: 'Monitor your progress and celebrate every achievement.',
  },
];

const HowWeWork = () => {
  return (
    <section className='w-full bg-primary-black text-white py-28'>
      <div className='container'>
        <div className='max-w-7xl mx-auto flex flex-col gap-12'>
          <div className='flex justify-between items-center w-full flex-col lg:flex-row gap-8 lg:gap-0'>
            <BoxReveal>
              <div>
                <h1 className='px-6 border-l-4 border-primary-green'>
                  How it <span className='text-primary-green'>Works</span>
                </h1>
                <p className='mt-[15px]'>Take charge and reclaim control over your well-being!</p>
              </div>
            </BoxReveal>

            <div className='w-4/5 max-w-[30rem]'>
              <BoxReveal width='100%' boxColor='#fff'>
                <p className='h4 font-normal text-center lg:text-left'>
                  It's time to move beyond just surviving—step into a life where you truly thrive!
                </p>
              </BoxReveal>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center'>
            {howWeWorkData.map(
              ({ description, icon: Icon, id, title }, idx) => {
                return (
                  <BlurFade
                    key={id}
                    className='lg:max-w-full max-w-sm mx-auto flex flex-col gap-6'
                    delay={0.5 + idx * 0.05}
                    inView
                  >
                    <MagicCard
                      key={id}
                      gradientSize={100}
                      gradientOpacity={0.1}
                      className='size-full p-8 rounded-[2.5rem] border border-white/30'
                    >
                      <div className='text-5xl bg-white/5 w-max p-5 rounded-[1.25rem]'>
                        <Icon />
                      </div>
                      <div className='space-y-3'>
                        <p className='h4 w-4/5'>{title}</p>

                        <p className='text-lg fontnormal text-white/70'>
                          {description}
                        </p>
                      </div>
                    </MagicCard>
                  </BlurFade>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;

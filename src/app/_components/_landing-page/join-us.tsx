import ButtonLink from '@/components/links/ButtonLink';

const JoinUs = () => {
  return (
    <section className='w-full bg-light-green py-28 text-center'>
      <div className='container'>
        <div className='max-w-7xl mx-auto flex flex-col gap-6 items-center'>
          <h2>Join Us As Wellness Supporters/ Wellness Providers</h2>
          <p className='max-w-2xl text-center text-lg'>
            Unlock a world of boundless opportunities. Sign up to started now!
          </p>
          <ButtonLink href='/register' className='px-12 py-3.5'>
            Sign Up
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

'use client';

import '@/lib/env';

import Faq from '@/app/_components/_landing-page/faq';
import HowWeWork from '@/app/_components/_landing-page/how-we-work';
import JoinUs from '@/app/_components/_landing-page/join-us';
import LandingBento from '@/app/_components/_landing-page/landing-bento';
import LandingHero from '@/app/_components/_landing-page/landing-hero';
import Reviews from '@/app/_components/_landing-page/reviews';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main className='w-full h-auto'>
      <LandingHero />
      <HowWeWork />
      <LandingBento />
      <Faq />
      <Reviews />
      <JoinUs />
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { FOLLOW_UP_LOGO_BLUR_DATA_URL } from '@/constant/app-constants';

import Logo from '~/images/follow-up-logo.png';

type FollowUpLogoProps = {
  href?: string;
  className?: string;
  isLink?: boolean;
};

const FollowUpLogo = ({
  className,
  href,
  isLink = true,
}: FollowUpLogoProps) => {
  const Component = isLink ? Link : 'figure';

  return (
    <Component
      href={isLink ? (href ? href : '/') : ''}
      className={cn('w-24', [className])}
    >
      <Image
        src={Logo}
        alt='Follow Up'
        placeholder='blur'
        className='w-full h-auto'
        width={201}
        height={65}
        blurDataURL={FOLLOW_UP_LOGO_BLUR_DATA_URL}
      />
    </Component>
  );
};

export default FollowUpLogo;

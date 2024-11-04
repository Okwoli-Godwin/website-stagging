'use client';

import { cn } from '@/lib/utils';
import useCheckLinkActive from '@/hooks/useCheckLinkActive';

import PrimaryLink from '@/components/links/PrimaryLink';
import { UnstyledLinkProps } from '@/components/links/UnstyledLink';

type ActiveLinkProps<C extends React.ElementType> = {
  componentAs?: C;
  as?: string;
  activeClassName?: string;
  index?: boolean;
} & UnstyledLinkProps &
  React.ComponentProps<C>;

function ActiveLink<C extends React.ElementType>({
  children,
  componentAs,
  as,
  className,
  activeClassName,
  href,
  index = false,
  ...rest
}: ActiveLinkProps<C>) {
  const isActive = useCheckLinkActive(href.toString(), as, index);

  const Component = componentAs || PrimaryLink;
  return (
    <Component
      {...rest}
      href={href}
      className={cn(
        [className && className],
        [isActive && activeClassName && activeClassName]
      )}
    >
      {children}
    </Component>
  );
}

export default ActiveLink;

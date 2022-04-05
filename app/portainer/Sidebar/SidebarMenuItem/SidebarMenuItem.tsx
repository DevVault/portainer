import { PropsWithChildren, AriaAttributes } from 'react';
import clsx from 'clsx';
import { UISrefActive } from '@uirouter/react';

import { Link } from '@/portainer/components/Link';

import styles from './SidebarMenuItem.module.css';

interface WrapperProps {
  className?: string;
  ident?: boolean;
}

interface Props {
  path: string;
  pathParams?: Record<string, unknown>;
  iconClass?: string;
  className?: string;
  ident?: boolean;
}

export function SidebarMenuItemWrapper({
  ident,
  className,
  children,
  ...ariaProps
}: PropsWithChildren<WrapperProps> & AriaAttributes) {
  return (
    <li
      className={clsx(styles.sidebarMenuItem, className, {
        [styles.ident]: ident,
      })}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...ariaProps}
    >
      {children}
    </li>
  );
}

export function SidebarMenuItem({
  path,
  pathParams,
  iconClass,
  className,
  children,
  ident = false,
  ...ariaProps
}: PropsWithChildren<Props> & AriaAttributes) {
  return (
    <SidebarMenuItemWrapper
      className={className}
      ident={ident}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...ariaProps}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      <UISrefActive class={styles.active}>
        <Link to={path} params={pathParams} className={styles.link}>
          {children}
          {iconClass && (
            <i
              role="img"
              className={clsx('fa', iconClass, styles.menuIcon)}
              aria-label="itemIcon"
              aria-hidden="true"
            />
          )}
        </Link>
      </UISrefActive>
    </SidebarMenuItemWrapper>
  );
}

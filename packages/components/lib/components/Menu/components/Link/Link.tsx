import React, { forwardRef, Ref } from 'react';
import { classNames } from '@gatsby-tv/utilities';

import { Connected } from '@lib/components/Connected';
import { Icon } from '@lib/components/Icon';
import { Optional } from '@lib/components/Optional';
import {
  Link as LinkComponent,
  LinkProps as LinkComponentProps,
} from '@lib/components/Link';
import { useItem } from '@lib/utilities/item';
import { IconSource } from '@lib/types';

import styles from '../../Menu.scss';

export interface LinkProps extends Omit<LinkComponentProps, 'href'> {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  icon?: IconSource;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref: Ref<HTMLAnchorElement>) => {
    const { children, className, icon: IconComponent, href, ...rest } = props;
    const { itemClass } = useItem();

    const classes = classNames(className, itemClass, styles.Item);

    const IconMarkup = IconComponent ? (
      <Icon src={IconComponent} size="smaller" />
    ) : null;

    return (
      <Optional
        component={LinkComponent}
        active={Boolean(href)}
        $props={{ ref, href, ...rest }}
      >
        <Connected.Item className={classes}>
          <Optional
            component="div"
            active={Boolean(IconComponent)}
            $props={{ className: styles.Container }}
          >
            {IconMarkup}
            <div className={styles.Text}>{children}</div>
          </Optional>
        </Connected.Item>
      </Optional>
    );
  }
);

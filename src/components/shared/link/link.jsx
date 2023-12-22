/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  base: '',
  size: {
    default: '',
  },
  theme: {
    default: '',
  },
};

/** @type {React.ForwardRefRenderFunction<?, Link.propTypes>} */
const Link = React.forwardRef(
  ({ className: additionalClassName, size, theme, to, children, ...props }, ref) => {
    const className = clsx(
      size && theme && styles.base,
      styles.size[size],
      styles.theme[theme],
      additionalClassName
    );

    if (to.startsWith('/')) {
      return (
        <NextLink className={className} href={to} ref={ref} {...props}>
          {children}
        </NextLink>
      );
    }

    return (
      <a className={className} href={to} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: '',
  to: null,
  size: 'default',
  theme: 'default',
};

Link.displayName = 'Link';

export default Link;

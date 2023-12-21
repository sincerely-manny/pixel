import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  base: `font-semibold inline-flex justify-center items-center text-center relative
    cursor-pointer 
    transition-all 
    active:opacity-80 
    focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary-1-hover
    disabled:opacity-80 disabled:cursor-not-allowed disabled:pointer-events-none
    group
    `,
  size: {
    sm: 'text-sm rounded-xl px-[1.125rem] py-2.5',
    md: 'text-base rounded-xl w-[10.5rem] h-12',
  },
  theme: {
    'white-filled': 'bg-grey-98 text-black hover:bg-grey-94',
    'violet-filled': 'bg-primary-1 text-black hover:bg-primary-1-hover', // hover:shadow-button-violet <- excluded due to preformance issues in safari
  },
};

const Button = ({
  className: additionalClassName = null,
  to = null,
  size = 'md',
  theme = 'violet-filled',
  children,
  ...otherProps
}) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={className}
      to={to}
      style={{ transform: 'translate3d(0, 0, 0)' }} // force hardware acceleration
      {...otherProps}
    >
      {children}
      {/* <div
        className="pointer-events-none absolute left-0 top-0 isolate z-0 h-full w-full rounded-xl opacity-0  shadow-button-violet will-change-auto group-hover:opacity-100"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      /> */}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

export default Button;

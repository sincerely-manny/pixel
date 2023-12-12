import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  // TODO: Add base styles
  base: 'font-semibold inline-flex justify-center items-center text-center disabled:opacity-80 transition-all active:scale-95 disabled:active:scale-100',
  // TODO: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       The name of the size cannot be lower than the font size that being used, e.g. "sm" size cannot have font-size "xs"
  //       Check out an example by a link above for better understanding
  size: {
    sm: 'text-sm rounded-xl px-[1.125rem] py-2.5',
    md: 'text-base rounded-xl w-[10.5rem] h-12',
  },
  // TODO: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {
    'white-filled': 'bg-grey-98 text-black hover:bg-grey-94',
    'violet-filled': 'bg-primary-1 text-black hover:bg-primary-1-hover hover:shadow-button-violet',
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
    <Tag className={className} to={to} {...otherProps}>
      {children}
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

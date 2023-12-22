import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import Link from 'components/shared/link';

import Error from './images/error.inline.svg';
import Loading from './images/loading.inline.svg';
import Success from './images/success.inline.svg';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  // flex overflow-hidden justify-center items-center
  base: `font-semibold text-center relative
    overflow-hidden
    cursor-pointer 
    transition-all
    active:opacity-80 
    focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary-1-hover
    disabled:cursor-not-allowed disabled:pointer-events-none
    group
    `,
  size: {
    sm: 'text-sm rounded-xl px-[1.125rem] py-2.5',
    md: 'text-base rounded-xl w-[10.5rem] h-12',
  },
  theme: {
    'white-filled': 'bg-grey-98 text-black hover:bg-grey-94 disabled:opacity-80',
    'violet-filled': 'bg-primary-1 text-black hover:bg-primary-1-hover', // hover:shadow-button-violet <- excluded due to preformance issues in safari
  },
  state: {
    default: '',
    loading: 'bg-primary-1 text-white',
    success: 'bg-secondary-1 text-white',
    error: 'bg-primary-2 text-white',
  },
};

const Button = ({
  className: additionalClassName = null,
  to = null,
  size = 'md',
  theme = 'violet-filled',
  children,
  state = 'default',
  ...otherProps
}) => {
  const className = twMerge(
    clsx(
      styles.base,
      styles.size[size],
      styles.theme[theme],
      styles.state[state],
      additionalClassName
    )
  );

  const ref = useRef(null);

  const variants = {
    default: {},
    round: {
      width: ref.current?.clientHeight,
      borderRadius: 9999,
    },
  };

  const Tag = to ? Link : motion.button;

  return (
    <Tag
      ref={ref}
      className={className}
      to={to}
      {...otherProps}
      variants={variants}
      animate={state === 'default' ? 'default' : 'round'}
      transition={{
        duration: 0.2,
      }}
      whileTap={{
        scale: 0.9,
      }}
      // whileLeave={{
      //   boxShadow: 'none',
      // }}
      // whileHover={{
      //   boxShadow: '0px 0px 60px 0px rgba(187, 153, 255, 0.4)',
      // }}
    >
      <AnimatePresence>
        <motion.div
          key={state}
          initial={false}
          animate={{ y: 0, opacity: 1, height: 'auto' }}
          exit={{ y: -60, opacity: 0, height: 0 }}
          transition={{ duration: 0.2, type: 'spring', stiffness: 400, damping: 15 }}
          className="flex h-full w-full items-center justify-center whitespace-nowrap"
        >
          {state === 'default' && children}
          {state === 'loading' && (
            <Loading className="h-[1.875rem] w-auto shrink-0 grow-0 animate-spin" />
          )}
          {state === 'success' && <Success className="h-[0.925rem] w-auto shrink-0 grow-0" />}
          {state === 'error' && <Error className="h-[0.875rem] w-auto shrink-0 grow-0" />}
        </motion.div>
      </AnimatePresence>
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  state: PropTypes.oneOf(Object.keys(styles.state)),
  children: PropTypes.node.isRequired,
};

export default Button;

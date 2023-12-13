import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import whiteNoise from './images/bg-white-noise.png';
import Shape1 from './images/shape1.inline.svg';
import Shape2 from './images/shape2.inline.svg';
import Shape3 from './images/shape3.inline.svg';

const styles = {
  base: 'relative grid grid-cols-6 gap-x-10',
};

const Invoice = ({ className: additionalClassName = null }) => {
  const className = clsx(styles.base, additionalClassName);
  return (
    <div className={className}>
      <div className="absolute bottom-0 left-0 right-0 top-0 col-span-4 col-start-2 backdrop-blur-[10px]" />
      <Shape1 className="absolute left-0 top-1/2 h-[70%] w-auto -translate-y-1/2 text-primary-1 opacity-40 blur-[50px]" />
      <Shape2 className="absolute bottom-0 right-0 h-[70%] w-auto translate-y-[10%] text-secondary-2 opacity-40 blur-[50px]" />
      <Shape3 className="absolute left-0 top-0 h-[70%] w-auto -translate-y-[10%] text-secondary-2 opacity-50 blur-[50px]" />
      <div className="absolute bottom-0 left-[10%] aspect-square h-[42.5%] rounded-full bg-white opacity-[15%] blur-[50px]" />
      <div className="absolute left-1/2 top-0 aspect-square h-[30.5%] -translate-x-1/2 rounded-full bg-primary-3 opacity-30 blur-[50px]" />
      <div className="absolute left-[10%] top-1/2 aspect-square h-[30.5%] -translate-y-1/2 rounded-full bg-primary-3 opacity-10 blur-[50px]" />
      <div className="absolute right-0 top-0 aspect-square w-[47%] -translate-y-[10%] rounded-full bg-primary-2 opacity-20 blur-[50px]" />
      <div className="absolute bottom-0 left-1/2 aspect-square w-[17.5%] -translate-x-1/2 rounded-full bg-white opacity-40 blur-[50px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 col-span-4 col-start-2 grid items-stretch mix-blend-overlay">
        <div className="border-gradient-rt-ld-white relative rounded-sm " />
      </div>
      <div className="relative col-span-4 col-start-2 h-[685px] rounded-sm shadow-2xl">
        <div className="absolute left-0 top-0 z-[5] h-full w-full overflow-hidden rounded-sm">
          <div
            className="absolute left-0 top-0 h-full w-full bg-repeat opacity-[4%]"
            style={{ backgroundImage: `url(${whiteNoise.src})` }}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-[#352E38] opacity-40" />
          <div className="absolute left-[20%] h-full w-9 bg-white opacity-10 blur-[30px]" />
          <svg className="absolute left-0 top-0 h-full w-full mix-blend-overlay blur-[45px]">
            <line x1="0" y1="100%" x2="100%" y2="0" className="stroke-white stroke-[20]" />
          </svg>
          <svg className="absolute left-0 top-0 h-full w-full opacity-20 mix-blend-overlay blur-[15px]">
            <line x1="0" y1="100%" x2="100%" y2="0" className="stroke-white stroke-[10]" />
          </svg>
        </div>
        <div className="relative z-10">-</div>
      </div>
    </div>
  );
};

Invoice.propTypes = {
  className: PropTypes.string,
};

export default Invoice;

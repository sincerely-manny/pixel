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
      <Shape1 className="absolute left-0 top-1/2 h-[70%] w-auto -translate-y-1/2 text-primary-1 opacity-40 blur-[100px]" />
      <Shape2 className="absolute bottom-0 right-0 h-[70%] w-auto translate-y-[10%] text-secondary-2 opacity-40 blur-[100px]" />
      <Shape3 className="absolute left-0 top-0 h-[70%] w-auto -translate-y-[10%] text-secondary-2 opacity-50 blur-[100px]" />
      <div className="absolute bottom-0 left-[10%] aspect-square w-[40%] rounded-full bg-white opacity-[15%] blur-[100px]" />
      <div className="absolute left-1/2 top-0 aspect-square w-[30%] -translate-x-1/2 rounded-full bg-primary-3 opacity-30 blur-[100px]" />
      <div className="absolute left-[10%] top-1/2 aspect-square w-[30%] -translate-y-1/2 rounded-full bg-primary-3 opacity-10 blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 aspect-square w-[20%] -translate-x-1/2 rounded-full bg-white opacity-40 blur-[100px]" />

      <div className="border-gradient-rt-ld-white relative col-span-4 col-start-2 h-80 rounded-sm shadow-2xl backdrop-blur-[10px]">
        <div className="absolute left-0 top-0 z-[5] h-full w-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full w-full bg-repeat opacity-[4%]"
            style={{ backgroundImage: `url(${whiteNoise.src})` }}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-[#352E38] opacity-40" />
          <div className="absolute left-[20%] h-full w-9 bg-white opacity-10 blur-[60px]" />
          <svg className="absolute left-0 top-0 h-full w-full mix-blend-overlay blur-[120px]">
            <line x1="0" y1="100%" x2="100%" y2="0" className="stroke-white stroke-[20]" />
          </svg>
          <svg className="absolute left-0 top-0 h-full w-full opacity-20 mix-blend-overlay blur-[40px]">
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

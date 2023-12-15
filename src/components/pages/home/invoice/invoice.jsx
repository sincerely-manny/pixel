import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import AccountTable from './accountTable';
import BgBlurredLines from './bgBlurredLines';
import BgBlurredShapes from './bgBlurredShapes';
import whiteNoise from './images/bg-white-noise.png';
import Mockups from './mockups';
import TableHeader from './tableHeader';

const styles = {
  base: 'relative grid grid-cols-6 gap-x-10 ',
};

const Invoice = ({ className: additionalClassName = null }) => {
  const className = clsx(styles.base, additionalClassName);
  return (
    <div className={className}>
      <BgBlurredShapes />
      <Mockups />
      <div className="relative col-span-4 col-start-2 rounded-sm shadow-2xl">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-sm backdrop-blur-[10px]">
          <div
            className="absolute left-0 top-0 h-full w-full bg-repeat opacity-[4%]"
            style={{ backgroundImage: `url(${whiteNoise.src})` }}
          />
          <BgBlurredLines />
        </div>
        {/* actual content */}
        <div className="relative p-6 pb-4 text-white">
          <TableHeader />
          <AccountTable />
        </div>
      </div>
      {/* border w/ gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 col-span-4 col-start-2 grid items-stretch mix-blend-overlay">
        <div className="border-gradient-rt-ld-white relative rounded-sm" />
      </div>
    </div>
  );
};

Invoice.propTypes = {
  className: PropTypes.string,
};

export default Invoice;

import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import AccountTable from './account-table';
import BgBlurredLines from './bg-blurred-lines';
import BgBlurredShapes from './bg-blurred-shapes';
import BorderMain from './border-main';
import TableHeader from './table-header';
// import Mockups from './mockups';

const styles = {
  base: 'relative grid grid-cols-6 gap-x-10 h-[685px]',
};

const Invoice = ({ className: additionalClassName = null }) => {
  const className = clsx(styles.base, additionalClassName);
  return (
    <div className={className}>
      <BgBlurredShapes />
      {/* <Mockups /> */}
      {/* TODO: Backdrop-blur */}
      <div className="relative col-span-4 col-start-2">
        <BgBlurredLines />
        {/* actual content */}
        <div className="relative p-6 pb-4 text-white">
          <TableHeader />
          <AccountTable />
        </div>
        <BorderMain />
      </div>
      {/* border w/ gradient */}
    </div>
  );
};

Invoice.propTypes = {
  className: PropTypes.string,
};

export default Invoice;

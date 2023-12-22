import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import AccountTable from './account-table';
import BgBlurredShapes from './bg-blurred-shapes';
import BgBlurredWithBorders from './bg-blurred-with-borders';
import Mockups from './mockups';
import TableHeader from './table-header';

const styles = {
  base: 'relative grid grid-cols-6 gap-x-10',
};

const Invoice = ({ className: additionalClassName = null }) => {
  const className = clsx(styles.base, additionalClassName);
  return (
    <div className={className}>
      <BgBlurredShapes />
      <Mockups />
      <div className="relative col-span-4 col-start-2 sm:col-span-6 sm:col-start-1">
        <BgBlurredWithBorders />
        <div className="relative p-6 pb-4 text-white">
          <TableHeader />
          <AccountTable />
        </div>
      </div>
    </div>
  );
};

Invoice.propTypes = {
  className: PropTypes.string,
};

export default Invoice;

import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import AccountTable from './account-table';
import BgBlurredLines from './bg-blurred-lines';
import BgBlurredShapes from './bg-blurred-shapes';
import BorderMain from './border-main';
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
      <div className="relative col-span-4 col-start-2">
        <BgBlurredLines />
        <div className="relative p-6 pb-4 text-white">
          <TableHeader />
          <AccountTable />
        </div>
        <BorderMain />
      </div>
    </div>
  );
};

Invoice.propTypes = {
  className: PropTypes.string,
};

export default Invoice;

import PropTypes from 'prop-types';
import React from 'react';

const Page = ({ params: { path } }) => <div>This page is: /{path.join('/')}</div>;

Page.propTypes = {
  params: PropTypes.shape({
    path: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Page;

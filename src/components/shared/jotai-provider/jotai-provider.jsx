'use client';

import { Provider } from 'jotai';
import PropTypes from 'prop-types';

const JotaiProvider = ({ children }) => <Provider>{children}</Provider>;

JotaiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JotaiProvider;

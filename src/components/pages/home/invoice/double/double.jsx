import PropTypes from 'prop-types';

const Double = ({ children, className = '' }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="mix-blend-overlay">{children}</span>
    <span className="absolute left-0 top-0 opacity-60 mix-blend-overlay" aria-hidden="true">
      {children}
    </span>
  </span>
);

Double.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Double;

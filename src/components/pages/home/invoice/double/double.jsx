import PropTypes from 'prop-types';

const Double = ({ children, className = '', overlayOpacity = 60 }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="mix-blend-overlay">{children}</span>
    <span
      className="absolute left-0 top-0 mix-blend-overlay"
      style={{ opacity: `${overlayOpacity / 100}` }}
      aria-hidden="true"
    >
      {children}
    </span>
  </span>
);

Double.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  overlayOpacity: PropTypes.number,
};

export default Double;

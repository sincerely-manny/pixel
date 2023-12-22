import { useAtom } from 'jotai';
import PropTypes from 'prop-types';

import { mobileMenuOpenAtom } from 'store';

import Burger from './images/burger.inline.svg';

const MobileMenuButton = ({ className = '' }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useAtom(mobileMenuOpenAtom);
  return (
    <div className={` ${className}`}>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Burger
          className={`${
            isMobileMenuOpen ? 'text-primary-1' : ' text-grey-98'
          } h-8 w-8 transition-all duration-300`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

MobileMenuButton.propTypes = {
  className: PropTypes.string,
};

export default MobileMenuButton;

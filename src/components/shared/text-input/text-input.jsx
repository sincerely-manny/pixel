import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import BgWithBorder from './bg-with-border/bg-with-border';

const TextInput = forwardRef(
  ({ placeholder = '', name, className = '', children = null, ...props }, ref) => (
    <div className={`${className} relative rounded-2xl`} role="textbox" aria-label={placeholder}>
      <BgWithBorder />
      <div className="relative grid grid-cols-[1fr_auto] items-center">
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          ref={ref}
          className={`remove-autocomplete-styles col-start-1 col-end-3 row-start-1 row-end-1 inline-block
              h-[3.75em] appearance-none rounded-full bg-transparent px-5
              py-0 text-base leading-[3.75em] text-white opacity-80 outline-0
              ring-offset-transparent placeholder:bg-violet-gradient placeholder:bg-clip-text placeholder:text-transparent autofill:text-base
              autofill:text-white focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1-hover
              [&:-webkit-autofill]:[-webkit-text-fill-color:theme('colors.white')]
              ${children ? 'pr-[11.75rem]' : ''}
              `}
          {...props}
        />
        <div className="col-start-2 col-end-2 row-start-1 row-end-1 mr-1.5">{children}</div>
      </div>
    </div>
  )
);

TextInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

TextInput.defaultProps = {
  placeholder: '',
  className: '',
  children: null,
};

TextInput.displayName = 'TextInput';

export default TextInput;

import PropTypes from 'prop-types';

import Border from './border';

const TextInput = ({ placeholder = '', name, className = '', children = null }) => (
  <div
    className={`${className} relative rounded-2xl p-1.5`}
    role="textbox"
    aria-label={placeholder}
  >
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl">
      <div className="absolute left-0 top-0 h-full w-full bg-white bg-opacity-10 mix-blend-overlay" />
      <div className="absolute left-0 top-[-30%] h-[160%] w-full bg-white-gradient-267deg-to-17p mix-blend-overlay" />
      <div className="absolute left-0 top-0 h-[160%] w-full bg-white-gradient-122deg-to-50p mix-blend-overlay" />
    </div>

    <div className="relative flex w-full items-stretch justify-stretch gap-1.5">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="remove-autocomplete-styles grow appearance-none rounded-full bg-transparent pl-7 pr-2
              text-base text-white opacity-80 outline-0 
              placeholder:bg-violet-gradient placeholder:bg-clip-text placeholder:text-transparent
              autofill:text-base autofill:text-white focus:outline-none
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1-hover focus-visible:ring-offset-0
              [&:-webkit-autofill]:[-webkit-text-fill-color:theme('colors.white')]
              "
      />
      {children}
    </div>
    <Border />
  </div>
);

TextInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TextInput;

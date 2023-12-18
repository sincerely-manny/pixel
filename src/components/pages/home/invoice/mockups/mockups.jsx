import PropTypes from 'prop-types';

import MockupBottomLeft from './mockup-bottom-left';
import MockupBottomRight from './mockup-bottom-right';
import MockupTopLeft from './mockup-top-left';
import MockupTopRight from './mockup-top-right';

const ContainerGrid = ({ className = '', children = null }) => (
  <div
    className={`absolute bottom-0 left-0 right-0 top-0 grid grid-cols-6 gap-x-10 rounded-sm ${className}`}
  >
    {children}
  </div>
);

ContainerGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const ContainerCols = ({ className = '', children = null }) => (
  <div className={`absolute col-span-4 col-start-2 ${className}`}>{children}</div>
);

ContainerCols.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const Mockups = () => (
  <>
    {/* bottom */}
    <ContainerGrid className=" mix-blend-overlay [mask-type:alpha] [mask-image:linear-gradient(180deg,_transparent_7%,_white_31%,_white_54%,_transparent_88%)]">
      <ContainerCols className="bottom-0 left-0 right-[10%] top-[10%] translate-x-[-19.5%] rotate-[-4deg]">
        <MockupBottomLeft />
      </ContainerCols>
      <ContainerCols className="bottom-0 left-[10%] right-0 top-[10%] translate-x-[19.5%] rotate-[4deg]">
        <MockupBottomRight />
      </ContainerCols>
    </ContainerGrid>
    {/* top */}
    <ContainerGrid className=" mix-blend-overlay [mask-type:alpha] [mask-image:linear-gradient(180deg,_white_83%,_transparent_100%)]">
      <ContainerCols className="bottom-[5%] left-0 right-[10%] top-[5%] -translate-x-[9.75%] -rotate-2">
        <MockupTopLeft />
      </ContainerCols>
      <ContainerCols className="bottom-[5%] left-[10%] right-0 top-[5%] translate-x-[9.75%] rotate-2">
        <MockupTopRight />
      </ContainerCols>
    </ContainerGrid>
    <ContainerGrid>
      <ContainerCols className="bottom-0 left-0 right-0 top-0 backdrop-blur-[10px]" />
    </ContainerGrid>
  </>
);

export default Mockups;

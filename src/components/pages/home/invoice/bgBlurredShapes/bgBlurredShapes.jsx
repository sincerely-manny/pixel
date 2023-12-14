import Shape1 from './images/shape1.inline.svg';
import Shape2 from './images/shape2.inline.svg';
import Shape3 from './images/shape3.inline.svg';

const BgBlurredShapes = () => (
  <>
    <Shape1 className="absolute left-0 top-1/2 h-[70%] w-auto -translate-y-1/2 text-primary-1 opacity-40 blur-[50px]" />
    <Shape2 className="absolute bottom-0 right-0 h-[70%] w-auto translate-y-[10%] text-secondary-2 opacity-40 blur-[50px]" />
    <Shape3 className="absolute left-0 top-0 h-[70%] w-auto -translate-y-[10%] text-secondary-2 opacity-50 blur-[50px]" />
    <div className="absolute bottom-0 left-[10%] aspect-square h-[42.5%] rounded-full bg-white opacity-[15%] blur-[50px]" />
    <div className="absolute left-1/2 top-0 aspect-square h-[30.5%] -translate-x-1/2 rounded-full bg-primary-3 opacity-30 blur-[50px]" />
    <div className="absolute left-[10%] top-1/2 aspect-square h-[30.5%] -translate-y-1/2 rounded-full bg-primary-3 opacity-10 blur-[50px]" />
    <div className="absolute right-0 top-0 aspect-square h-[49.5%] -translate-y-[10%] rounded-full bg-primary-2 opacity-20 blur-[50px]" />
    <div className="absolute bottom-0 left-1/2 aspect-square h-[18%] -translate-x-1/2 rounded-full bg-white opacity-40 blur-[50px]" />
  </>
);

export default BgBlurredShapes;

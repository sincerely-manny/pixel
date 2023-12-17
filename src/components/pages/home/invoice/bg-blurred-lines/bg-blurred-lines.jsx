import whiteNoise from '../images/bg-white-noise.png';

const BgBlurredLines = () => (
  <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-sm shadow-2xl">
    <div className="absolute left-0 top-0 h-full w-full" />
    <div className="absolute left-0 top-0 h-full w-full bg-[#352E38] opacity-40" />
    <div
      className="absolute left-0 top-0 h-full w-full bg-repeat opacity-[4%]"
      style={{ backgroundImage: `url(${whiteNoise.src})` }}
    />
    <div className="absolute left-[20%] h-full w-9 bg-white opacity-10 blur-[30px]" />
    <svg className="absolute left-0 top-0 h-full w-full mix-blend-overlay blur-[45px]">
      <line x1="0" y1="100%" x2="100%" y2="0" className="stroke-white stroke-[20]" />
    </svg>
    <svg className="absolute left-0 top-0 h-full w-full opacity-20 mix-blend-overlay blur-[20px]">
      <line x1="0" y1="100%" x2="100%" y2="0" className="stroke-white stroke-[10]" />
    </svg>
  </div>
);

export default BgBlurredLines;

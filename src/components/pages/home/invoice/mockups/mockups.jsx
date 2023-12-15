import whiteNoise from '../images/bg-white-noise.png';

const Mockups = () => (
  <div
    className="
      absolute bottom-0 left-0 right-0 top-0 grid grid-cols-6 gap-x-10
      "
  >
    <div className="absolute bottom-0 left-0 right-0 top-0 col-span-4 col-start-2">
      {/* bottom */}
      {/* additioal shadows */}
      <div className="absolute bottom-0 left-0 right-[10%] top-[10%] translate-x-[-15%] rotate-[-4deg] rounded-sm bg-black bg-opacity-[1%] shadow-xl" />
      <div className="absolute bottom-0 left-[10%] right-0 top-[10%] translate-x-[15%] rotate-[4deg] rounded-sm bg-black bg-opacity-[1%] shadow-xl" />
      {/* left */}
      <div
        className="
           mockup-left
        absolute bottom-0
        left-0 right-[10%] top-[10%] translate-x-[-15%] rotate-[-4deg] overflow-hidden rounded-sm 
        opacity-100 mix-blend-overlay [mask-image:linear-gradient(100deg,_white_0%,_transparent_18%)] [mask-type:alpha]"
      >
        <div
          className="absolute left-0 top-0 h-full w-full bg-repeat opacity-10"
          style={{ backgroundImage: `url(${whiteNoise.src})` }}
        />
        <div
          className="absolute left-0 top-0 h-full w-full bg-repeat opacity-80"
          style={{
            background:
              'radial-gradient(37.70% 50.62% at 30.24% 51.25%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0) 74%)',
          }}
        />
        <div className="border-gradient-mockup absolute bottom-0 left-0 right-0 top-0 rounded-sm shadow-xl" />
      </div>
      {/* right */}
      <div
        className="
          mockup-right
        absolute bottom-0
        left-[10%] right-[0] top-[10%] translate-x-[15%] rotate-[4deg] overflow-hidden rounded-sm 
        opacity-100 mix-blend-overlay [mask-type:alpha] [mask-image:linear-gradient(260deg,_white_0%,_transparent_18%)]"
      >
        <div
          className="absolute left-0 top-0 h-full w-full bg-repeat opacity-10"
          style={{ backgroundImage: `url(${whiteNoise.src})` }}
        />
        <div
          className="absolute left-0 top-0 h-full w-full bg-repeat opacity-80"
          style={{
            background:
              'radial-gradient(37.70% 50.62% at 30.24% 51.25%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0) 74%)',
          }}
        />
        <div className="border-gradient-mockup absolute bottom-0 left-0 right-0 top-0 rounded-sm shadow-xl" />
      </div>
      {/* top */}
    </div>
  </div>
);

export default Mockups;

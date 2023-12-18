import whiteNoise from '../../images/bg-white-noise.png';

const MockupBottomLeft = () => (
  <svg
    width="410"
    height="605"
    viewBox="0 0 410 605"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pointer-events-none absolute bottom-0 left-0 h-full w-full shadow-xl"
    preserveAspectRatio="none"
  >
    <g clipPath="url(#clip0_8_22)">
      <g opacity="1">
        <mask
          id="mask0_8_22"
          className="[mask-type:alpha]"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="410"
          height="606"
        >
          <g opacity="0.15">
            <path
              d="M0.000427246 3.00196C0.000427246 1.34511 1.34357 0.00195312 3.00043 0.00195312H407C408.657 0.00195312 410 1.3451 410 3.00195V602.002C410 603.659 408.657 605.002 407 605.002H3.00042C1.34357 605.002 0.000427246 603.659 0.000427246 602.002V3.00196Z"
              fill="url(#paint0_linear_8_22)"
            />
          </g>
        </mask>
        <g mask="url(#mask0_8_22)">
          <g className="mix-blend-overlay">
            <path
              d="M3.00043 0.501953H407C408.381 0.501953 409.5 1.62124 409.5 3.00195V602.002C409.5 603.383 408.381 604.502 407 604.502H3.00042C1.61971 604.502 0.500427 603.383 0.500427 602.002V3.00196C0.500427 1.62125 1.61972 0.501953 3.00043 0.501953Z"
              fill="url(#paint1_radial_8_22)"
              fillOpacity="0.8"
            />
            <path
              className="mix-blend-overlay"
              d="M3.00043 0.501953H407C408.381 0.501953 409.5 1.62124 409.5 3.00195V602.002C409.5 603.383 408.381 604.502 407 604.502H3.00042C1.61971 604.502 0.500427 603.383 0.500427 602.002V3.00196C0.500427 1.62125 1.61972 0.501953 3.00043 0.501953Z"
              fill="url(#pattern0)"
              fillOpacity="0.1"
            />
            <path
              d="M3.00043 0.501953H407C408.381 0.501953 409.5 1.62124 409.5 3.00195V602.002C409.5 603.383 408.381 604.502 407 604.502H3.00042C1.61971 604.502 0.500427 603.383 0.500427 602.002V3.00196C0.500427 1.62125 1.61972 0.501953 3.00043 0.501953Z"
              stroke="url(#paint2_linear_8_22)"
            />
          </g>
          <g className="mix-blend-overlay" opacity="1">
            <path
              d="M0.500427 3.00196C0.500427 1.62125 1.61972 0.501953 3.00043 0.501953H407C408.381 0.501953 409.5 1.62124 409.5 3.00195V602.002C409.5 603.383 408.381 604.502 407 604.502H3.00042C1.61971 604.502 0.500427 603.383 0.500427 602.002V3.00196Z"
              stroke="url(#paint3_linear_8_22)"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_8_22" transform="scale(0.00215517 0.00144509)" />
      </pattern>
      <linearGradient
        id="paint0_linear_8_22"
        x1="0.000423274"
        y1="140.002"
        x2="410"
        y2="140.002"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.182927" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_8_22"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(0.398879 0.4389) rotate(55.8751) scale(730.839 474.106)"
      >
        <stop stopColor="white" />
        <stop offset="0.741521" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_8_22"
        x1="0.92474"
        y1="-4.00886"
        x2="410.004"
        y2="395.002"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.276476" stopColor="white" />
        <stop offset="0.867466" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_8_22"
        x1="0.92474"
        y1="-4.00886"
        x2="410.004"
        y2="395.002"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.276476" stopColor="white" />
        <stop offset="0.867466" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_8_22">
        <rect width="410" height="605" fill="white" />
      </clipPath>
      <image id="image0_8_22" width="464" height="692" xlinkHref={whiteNoise.src} />
    </defs>
  </svg>
);

export default MockupBottomLeft;

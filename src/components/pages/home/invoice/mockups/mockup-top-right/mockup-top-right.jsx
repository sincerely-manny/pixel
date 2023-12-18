import whiteNoise from '../../images/bg-white-noise.png';

const MockupTopRight = () => (
  <svg
    width="410"
    height="605"
    viewBox="0 0 410 605"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pointer-events-none absolute bottom-0 left-0 h-full w-full shadow-xl-right"
    preserveAspectRatio="none"
  >
    <g clipPath="url(#clip0_12_70)">
      <g opacity="0.6">
        <mask
          id="mask0_12_70"
          className="[mask-type:alpha]"
          maskUnits="userSpaceOnUse"
          x="0"
          y="-1"
          width="411"
          height="606"
        >
          <g opacity="0.6">
            <path
              d="M410.001 2.99708C410.001 1.34022 408.658 -0.00292969 407.001 -0.00292969H3.00145C1.34459 -0.00292969 0.00144958 1.34022 0.00144958 2.99707V601.997C0.00144958 603.654 1.34462 604.997 3.00145 604.997H407.001C408.658 604.997 410.001 603.654 410.001 601.997V2.99708Z"
              fill="url(#paint0_linear_12_70)"
            />
          </g>
        </mask>
        <g mask="url(#mask0_12_70)">
          <g className="mix-blend-overlay">
            <path
              d="M409.501 2.99708C409.501 1.61636 408.382 0.49707 407.001 0.49707H3.00145C1.62075 0.49707 0.50145 1.61636 0.50145 2.99707V601.997C0.50145 603.378 1.62078 604.497 3.00145 604.497H407.001C408.382 604.497 409.501 603.378 409.501 601.997V2.99708Z"
              fill="url(#paint1_radial_12_70)"
              fillOpacity="0.8"
            />
            <path
              className="mix-blend-overlay"
              d="M409.501 2.99708C409.501 1.61636 408.382 0.49707 407.001 0.49707H3.00145C1.62075 0.49707 0.50145 1.61636 0.50145 2.99707V601.997C0.50145 603.378 1.62078 604.497 3.00145 604.497H407.001C408.382 604.497 409.501 603.378 409.501 601.997V2.99708Z"
              fill="url(#pattern0)"
              fillOpacity="0.1"
            />
            <path
              d="M409.501 2.99708C409.501 1.61636 408.382 0.49707 407.001 0.49707H3.00145C1.62075 0.49707 0.50145 1.61636 0.50145 2.99707V601.997C0.50145 603.378 1.62078 604.497 3.00145 604.497H407.001C408.382 604.497 409.501 603.378 409.501 601.997V2.99708Z"
              stroke="url(#paint2_linear_12_70)"
            />
          </g>
          <g className="mix-blend-overlay" opacity="0.4">
            <path
              d="M409.501 2.99708C409.501 1.61636 408.382 0.49707 407.001 0.49707H3.00145C1.62075 0.49707 0.50145 1.61636 0.50145 2.99707V601.997C0.50145 603.378 1.62078 604.497 3.00145 604.497H407.001C408.382 604.497 409.501 603.378 409.501 601.997V2.99708Z"
              stroke="url(#paint3_linear_12_70)"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_12_70" transform="scale(0.00215517 0.00144509)" />
      </pattern>
      <linearGradient
        id="paint0_linear_12_70"
        x1="410.001"
        y1="139.997"
        x2="0.00144958"
        y2="139.997"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.182927" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_12_70"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(409.603 0.433989) rotate(124.125) scale(730.839 474.106)"
      >
        <stop stopColor="white" />
        <stop offset="0.741521" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_12_70"
        x1="409.077"
        y1="-4.0137"
        x2="-0.00251013"
        y2="394.997"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.276476" stopColor="white" />
        <stop offset="0.867466" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_12_70"
        x1="409.077"
        y1="-4.0137"
        x2="-0.00251013"
        y2="394.997"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.276476" stopColor="white" />
        <stop offset="0.867466" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_12_70">
        <rect width="410" height="605" fill="white" />
      </clipPath>
      <image id="image0_12_70" width="464" height="692" xlinkHref={whiteNoise.src} />
    </defs>
  </svg>
);

export default MockupTopRight;

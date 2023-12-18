import whiteNoise from '../../images/bg-white-noise.png';

const MockupTopLeft = () => (
  <svg
    width="410"
    height="605"
    viewBox="0 0 410 605"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pointer-events-none absolute bottom-0 left-0 h-full w-full shadow-xl-left"
    preserveAspectRatio="none"
  >
    <g opacity="0.6">
      <mask
        id="mask0_11_59"
        className="[mask-type:alpha]"
        maskUnits="userSpaceOnUse"
        x="-1"
        y="-1"
        width="411"
        height="606"
      >
        <g opacity="0.6">
          <path
            d="M-0.00128174 2.99708C-0.00128174 1.34022 1.34186 -0.00292969 2.99872 -0.00292969H406.999C408.656 -0.00292969 409.999 1.34022 409.999 2.99707V601.997C409.999 603.654 408.656 604.997 406.999 604.997H2.99872C1.34186 604.997 -0.00128174 603.654 -0.00128174 601.997V2.99708Z"
            fill="url(#paint0_linear_11_59)"
          />
        </g>
      </mask>
      <g mask="url(#mask0_11_59)">
        <g className="mix-blend-overlay">
          <path
            d="M0.498718 2.99708C0.498718 1.61636 1.61801 0.49707 2.99872 0.49707H406.999C408.379 0.49707 409.499 1.61636 409.499 2.99707V601.997C409.499 603.378 408.379 604.497 406.999 604.497H2.99872C1.618 604.497 0.498718 603.378 0.498718 601.997V2.99708Z"
            fill="url(#paint1_radial_11_59)"
            fillOpacity="0.8"
          />
          <path
            className="mix-blend-overlay"
            d="M0.498718 2.99708C0.498718 1.61636 1.61801 0.49707 2.99872 0.49707H406.999C408.379 0.49707 409.499 1.61636 409.499 2.99707V601.997C409.499 603.378 408.379 604.497 406.999 604.497H2.99872C1.618 604.497 0.498718 603.378 0.498718 601.997V2.99708Z"
            fill="url(#pattern0)"
            fillOpacity="0.1"
          />
          <path
            d="M0.498718 2.99708C0.498718 1.61636 1.61801 0.49707 2.99872 0.49707H406.999C408.379 0.49707 409.499 1.61636 409.499 2.99707V601.997C409.499 603.378 408.379 604.497 406.999 604.497H2.99872C1.618 604.497 0.498718 603.378 0.498718 601.997V2.99708Z"
            stroke="url(#paint2_linear_11_59)"
          />
        </g>
        <g className="mix-blend-overlay" opacity="0.4">
          <path
            d="M0.498718 2.99708C0.498718 1.61636 1.61801 0.49707 2.99872 0.49707H406.999C408.379 0.49707 409.499 1.61636 409.499 2.99707V601.997C409.499 603.378 408.379 604.497 406.999 604.497H2.99872C1.618 604.497 0.498718 603.378 0.498718 601.997V2.99708Z"
            stroke="url(#paint3_linear_11_59)"
          />
        </g>
      </g>
    </g>
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_11_59" transform="scale(0.00215517 0.00144509)" />
      </pattern>
      <linearGradient
        id="paint0_linear_11_59"
        x1="-0.00128571"
        y1="139.997"
        x2="409.999"
        y2="139.997"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.182927" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_11_59"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(0.39717 0.434017) rotate(55.8751) scale(730.839 474.106)"
      >
        <stop stopColor="white" />
        <stop offset="0.741521" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_11_59"
        x1="0.923009"
        y1="-4.01372"
        x2="410.003"
        y2="394.997"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.276476" stopColor="white" />
        <stop offset="0.867466" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_11_59"
        x1="0.923009"
        y1="-4.01372"
        x2="410.003"
        y2="394.997"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.276476" stopColor="white" />
        <stop offset="0.867466" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <image id="image0_11_59" width="464" height="692" xlinkHref={whiteNoise.src} />
    </defs>
  </svg>
);

export default MockupTopLeft;

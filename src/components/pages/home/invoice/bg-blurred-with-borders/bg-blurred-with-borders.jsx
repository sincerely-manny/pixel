import whiteNoise from '../images/bg-white-noise.png';

const BgBlurredWithBorders = () => (
  <svg
    width="464"
    height="685"
    viewBox="0 0 464 685"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-0 top-0 h-full w-full shadow-2xl"
    preserveAspectRatio="none"
  >
    <g filter="url(#filter0_b_16_198)">
      <rect width="464" height="685" rx="3" fill="#352E38" fillOpacity="0.4" />
      <rect
        width="464"
        height="685"
        rx="3"
        fill="url(#pattern0)"
        fillOpacity="0.04"
        className="mix-blend-overlay"
      />
    </g>
    <mask
      id="mask0_16_198"
      className="[mask-type:alpha]"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="464"
      height="685"
    >
      <path
        d="M0 3.00001C0 1.34315 1.34315 0 3 0H461C462.657 0 464 1.34315 464 3V682C464 683.657 462.657 685 461 685H2.99999C1.34314 685 0 683.657 0 682V3.00001Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_16_198)">
      <g opacity="0.1" filter="url(#filter1_f_16_198)">
        <rect x="88" width="36" height="685" fill="white" />
      </g>
      <g className="mix-blend-overlay" filter="url(#filter2_f_16_198)">
        <path d="M464 0L0 685" stroke="white" strokeWidth="20" />
      </g>
      <g className="mix-blend-overlay" opacity="0.2" filter="url(#filter3_f_16_198)">
        <path d="M464 0L0 685" stroke="white" strokeWidth="10" />
      </g>
    </g>
    <g className="mix-blend-overlay" opacity="0.4">
      <rect x="0.5" y="0.5" width="463" height="684" rx="2.5" stroke="white" />
    </g>
    <g className="mix-blend-overlay" opacity="0.6">
      <rect x="0.5" y="0.5" width="463" height="684" rx="2.5" stroke="url(#paint0_linear_16_198)" />
    </g>
    <defs>
      <filter
        id="filter0_b_16_198"
        x="-10"
        y="-10"
        width="484"
        height="705"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_16_198" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_16_198"
          result="shape"
        />
      </filter>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1.01022">
        <use xlinkHref="#image0_16_198" transform="scale(0.00215517 0.00145985)" />
      </pattern>
      <filter
        id="filter1_f_16_198"
        x="28"
        y="-60"
        width="156"
        height="805"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_16_198" />
      </filter>
      <filter
        id="filter2_f_16_198"
        x="-128.279"
        y="-125.608"
        width="720.559"
        height="936.216"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_16_198" />
      </filter>
      <filter
        id="filter3_f_16_198"
        x="-44.1397"
        y="-42.8041"
        width="552.279"
        height="770.608"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_16_198" />
      </filter>
      <linearGradient
        id="paint0_linear_16_198"
        x1="464"
        y1="-1.87338e-05"
        x2="9.03726e-08"
        y2="685"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.15601" stopColor="white" stopOpacity="0" />
        <stop offset="0.883212" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <image id="image0_16_198" width="464" height="692" xlinkHref={whiteNoise.src} />
    </defs>
  </svg>
);

export default BgBlurredWithBorders;

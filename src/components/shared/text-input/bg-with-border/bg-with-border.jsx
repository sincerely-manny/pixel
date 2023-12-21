const BgWithBorder = () => (
  <svg
    width="504"
    height="60"
    viewBox="0 0 504 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-0 top-0 h-full w-full"
    preserveAspectRatio="none"
  >
    <g className="mix-blend-overlay">
      <path
        d="M0 30C0 13.4315 13.4315 0 30 0H474C490.569 0 504 13.4315 504 30V30C504 46.5685 490.569 60 474 60H30C13.4315 60 0 46.5685 0 30V30Z"
        fill="white"
        fillOpacity="0.1"
      />
    </g>
    <g className="mix-blend-overlay">
      <path
        d="M0 30C0 13.4315 13.4315 0 30 0H474C490.569 0 504 13.4315 504 30V30C504 46.5685 490.569 60 474 60H30C13.4315 60 0 46.5685 0 30V30Z"
        fill="url(#paint0_linear_18_329)"
      />
    </g>
    <g className="mix-blend-overlay">
      <path
        d="M0 30C0 46.5685 13.4315 60 30 60H474C490.569 60 504 46.5685 504 30V30C504 13.4315 490.569 -4.76837e-07 474 -4.76837e-07H30C13.4315 -4.76837e-07 0 13.4315 0 30V30Z"
        fill="url(#paint1_linear_18_329)"
      />
    </g>
    <g className="mix-blend-overlay">
      <path
        d="M30 0.5H474C490.292 0.5 503.5 13.7076 503.5 30C503.5 46.2924 490.292 59.5 474 59.5H30C13.7076 59.5 0.5 46.2924 0.5 30C0.5 13.7076 13.7076 0.5 30 0.5Z"
        stroke="url(#paint2_linear_18_329)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_18_329"
        x1="412"
        y1="-19.8529"
        x2="140.086"
        y2="109.502"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.17" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_18_329"
        x1="190"
        y1="100.147"
        x2="208.083"
        y2="4.80279"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_18_329"
        x1="252"
        y1="0"
        x2="252"
        y2="60"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
);

export default BgWithBorder;

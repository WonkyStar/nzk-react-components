import * as React from "react";
import { SVGProps } from "react";

const SvgPrompt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 70 70"
    {...props}
  >
    <defs>
      <clipPath id="prompt_svg__a">
        <path
          data-name="Path 6327"
          d="M24.274 53.639c.884 14 9.3 15.269 11.722 18.567s2.511 12.086 2.511 12.086l7.043-.022 7.042.022s.084-8.792 2.508-12.086 10.838-4.57 11.722-18.567S56.8 28.7 45.55 28.7 23.39 39.641 24.274 53.639"
          fill="none"
        />
      </clipPath>
      <clipPath id="prompt_svg__c">
        <path
          data-name="Path 6328"
          d="M38.3 76.576s-2.629 1.357-2.593 1.737.624 10.924 1.828 12.608 5.672 1.856 7.6 1.856 8.239-.107 8.7-1.1 1.225-13.364 1.225-13.364l-2.6-1.737a15.383 15.383 0 0 0-6.928-1.495 17.623 17.623 0 0 0-7.232 1.495"
          fill="none"
        />
      </clipPath>
      <radialGradient
        id="prompt_svg__b"
        cx={0.46}
        cy={0.382}
        r={0.447}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#ffde27" />
        <stop offset={0.785} stopColor="#ffb63e" />
        <stop offset={0.98} stopColor="#fc813e" />
        <stop offset={1} stopColor="#fc813e" />
      </radialGradient>
      <linearGradient
        id="prompt_svg__d"
        x1={-1.84}
        y1={1.804}
        x2={-1.788}
        y2={1.804}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#878686" />
        <stop offset={0.016} stopColor="#878686" />
        <stop offset={1} stopColor="#908f8f" />
      </linearGradient>
    </defs>
    <g data-name="Group 9010">
      <path
        data-name="Path 6326"
        d="M41.6 5.921c-11.252 0-22.159 10.943-21.276 24.941s9.3 15.27 11.723 18.567a12.5 12.5 0 0 1 1.741 4.675c-.769.422-2.057 1.169-2.032 1.436.035.367.624 10.923 1.829 12.609s5.671 1.855 7.6 1.855 8.238-.107 8.695-1.1 1.231-13.369 1.231-13.369l-1.753-1.17a12.988 12.988 0 0 1 1.8-4.937c2.427-3.3 10.839-4.57 11.723-18.567S52.85 5.921 41.6 5.921"
        opacity={0.3}
      />
      <g
        data-name="Group 8623"
        transform="translate(-11 -25.296)"
        clipPath="url(#prompt_svg__a)"
      >
        <path
          data-name="Rectangle 3412"
          transform="translate(23.39 28.698)"
          fill="url(#prompt_svg__b)"
          d="M0 0h44.319v55.594H0z"
        />
      </g>
      <g
        data-name="Group 8625"
        transform="translate(-11 -25.296)"
        clipPath="url(#prompt_svg__c)"
      >
        <path
          data-name="Rectangle 3413"
          transform="translate(35.672 75.081)"
          fill="url(#prompt_svg__d)"
          d="M0 0h19.388v17.696H0z"
        />
      </g>
      <path
        data-name="Path 6329"
        d="M42.829 66.386c-.457.988-6.761 1.1-8.7 1.1s-6.392-.17-7.6-1.855c-1.134-4.9 14.226-3.777 16.292.76"
        fill="#a5a5a5"
      />
      <path
        data-name="Path 6330"
        d="M18.528 13.744c-4.633 6.023 4.9 7.444 6.083 3.054s-4.174-5.535-6.083-3.054"
        fill="#fff"
        opacity={0.3}
      />
      <path
        data-name="Path 6331"
        d="M27.454 51.645c-1.279.523-.208 8.5 1.044 9.748s5.412.176 6.941 0 1.349-8.412 1.126-9.748-4.142-2.033-9.111 0"
        fill="#c4c4c4"
        opacity={0.3}
      />
      <path
        data-name="Path 6332"
        d="M43 19.435c-2.823 1.328-5.1 7.635-.576 10.562s7.066-4.454 5.265-8.908A3.408 3.408 0 0 0 43 19.435"
        fill="#fff"
        opacity={0.3}
      />
      <path
        data-name="Path 6333"
        d="M30.876 24.815a2.9 2.9 0 0 1-2.293-.068 5.684 5.684 0 0 1-3.317-4.852 7.909 7.909 0 0 1 2.089-5.659A9.811 9.811 0 0 1 44 17.568a14.26 14.26 0 0 1 .274 7.049 5.784 5.784 0 0 1-1.884 3.827c-1.264.918-3.043.822-4.346 1.683a5.138 5.138 0 0 0-1.962 4.016 7.694 7.694 0 0 1-.537 3.338c-.563.99-2.181 1.446-2.8.492a2.417 2.417 0 0 1-.251-1.383c.065-3.634.421-7.839 3.416-9.9 1.095-.753 2.467-1.139 3.339-2.143 1.277-1.47 1.026-3.712.423-5.564a6.817 6.817 0 0 0-2.5-3.794 5.019 5.019 0 0 0-4.564-.242 8.587 8.587 0 0 0-3.568 3.045 3.981 3.981 0 0 0-.879 2.091 1.691 1.691 0 0 0 1.188 1.751 3.235 3.235 0 0 1 1.408-1.469c.495-.26 1.978 3.569.12 4.447"
        fill="#fff"
      />
      <path
        data-name="Path 6334"
        d="M31.947 42.661a1.631 1.631 0 0 0 .415 1.812c.654.507 1.585.25 2.413.235a2 2 0 0 0 .628-.059c.493-.172.688-.759.764-1.275a2.364 2.364 0 0 0-.135-1.443 1.839 1.839 0 0 0-1.342-.877 2.3 2.3 0 0 0-2.743 1.607"
        fill="#fff"
      />
      <path fill="none" d="M0 0h70v70H0z" />
    </g>
  </svg>
);

export default SvgPrompt;

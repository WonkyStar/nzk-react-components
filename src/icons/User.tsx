import * as React from "react";
import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    data-name="Icon - Child"
    viewBox="0 0 120 120"
    {...props}
  >
    <defs>
      <clipPath id="user_svg__a">
        <path
          fill="none"
          stroke="#fff"
          strokeWidth={4}
          d="M75.532 11.457a50.08 50.08 0 0 1 50.079 50.079c0 17.895-9.386 33.6-24.3 42.941a49.05 49.05 0 0 1-25.782 7.138 50.079 50.079 0 0 1 .003-100.158Z"
        />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h120v120H0z" />
    <g
      clipPath="url(#user_svg__a)"
      data-name="Mask Group 1"
      transform="translate(-15.533 -1.144)"
    >
      <path
        fill="#fff"
        d="M28.275 122.672v-12.259c0-13.491 20.908-24.53 46.463-24.53s46.464 11.039 46.464 24.53v12.26Zm23.229-73.564c0-13.545 10.402-24.525 23.234-24.525s23.229 10.98 23.229 24.525-10.4 24.52-23.229 24.52-23.234-10.98-23.234-24.52"
        data-name="Union 1"
      />
    </g>
  </svg>
);
export default SvgUser;

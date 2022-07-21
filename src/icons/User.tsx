import * as React from "react";
import { SVGProps } from "react";

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Icon - Child"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    {...props}
  >
    <defs>
      <clipPath id="user_svg__a">
        <path
          d="M75.532 11.457a50.079 50.079 0 0 1 50.079 50.079c0 17.895-9.386 33.6-24.3 42.941a49.045 49.045 0 0 1-25.782 7.138 50.079 50.079 0 0 1 .003-100.158Z"
          fill="none"
          stroke="#fff"
          strokeWidth={4}
        />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h120v120H0z" />
    <g
      data-name="Mask Group 1"
      transform="translate(-15.533 -1.144)"
      clipPath="url(#user_svg__a)"
    >
      <path
        data-name="Union 1"
        d="M28.275 122.672v-12.259c0-13.491 20.908-24.53 46.463-24.53s46.464 11.039 46.464 24.53v12.26Zm23.229-73.564c0-13.545 10.402-24.525 23.234-24.525s23.229 10.98 23.229 24.525-10.4 24.52-23.229 24.52-23.234-10.98-23.234-24.52Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgUser;

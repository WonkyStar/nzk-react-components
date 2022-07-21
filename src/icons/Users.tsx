import * as React from "react";
import { SVGProps } from "react";

const SvgUsers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Icon - Friends"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    {...props}
  >
    <defs>
      <clipPath id="users_svg__a">
        <path
          data-name="Path 1346"
          d="M978.244 696.691a50.366 50.366 0 0 1 25.931 93.556 49.294 49.294 0 0 1-25.931 7.176 50.366 50.366 0 0 1 0-100.732Z"
          transform="translate(-927.878 -696.691)"
          fill="none"
        />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h120v120H0z" />
    <g data-name="Group 553">
      <g
        data-name="Group 554"
        transform="translate(9.623 9.632)"
        clipPath="url(#users_svg__a)"
      >
        <g data-name="Group 553">
          <g data-name="Mask Group 1">
            <g data-name="Profile 5">
              <path
                data-name="Union 1"
                d="M53.897 101.309V67.798c0-6.511 10.089-11.839 22.426-11.839s22.431 5.322 22.431 11.839v33.512Zm11.21-63.1a11.232 11.232 0 1 1 11.216 11.833 11.539 11.539 0 0 1-11.215-11.836Z"
                fill="#fff"
              />
            </g>
          </g>
          <g data-name="Mask Group 1">
            <g data-name="Profile 5">
              <path
                data-name="Union 1"
                d="M1.999 101.309V67.798c0-6.511 10.094-11.839 22.431-11.839s22.426 5.322 22.426 11.839v33.512Zm11.216-63.1A11.232 11.232 0 1 1 24.43 50.042a11.535 11.535 0 0 1-11.215-11.836Z"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgUsers;

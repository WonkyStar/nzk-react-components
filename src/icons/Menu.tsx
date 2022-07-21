import * as React from "react";
import { SVGProps } from "react";

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    {...props}
  >
    <defs>
      <style>
        {
          ".menu_svg__a{fill:rgba(0,0,0,.3)}.menu_svg__b{fill:#afafaf}.menu_svg__c{fill:#fff}"
        }
      </style>
    </defs>
    <g transform="translate(17.667 74.023)">
      <rect
        className="menu_svg__a"
        width={84}
        height={13}
        rx={5}
        transform="translate(.333 6.977)"
      />
      <rect
        className="menu_svg__b"
        width={84}
        height={12}
        rx={5}
        transform="translate(.333 3.977)"
      />
      <rect
        className="menu_svg__c"
        width={84}
        height={13}
        rx={5}
        transform="translate(.333 -.023)"
      />
    </g>
    <g transform="translate(17.667 50.505)">
      <rect
        className="menu_svg__a"
        width={84}
        height={12}
        rx={5}
        transform="translate(.333 7.495)"
      />
      <rect
        className="menu_svg__b"
        width={84}
        height={13}
        rx={5}
        transform="translate(.333 3.495)"
      />
      <rect
        className="menu_svg__c"
        width={84}
        height={12}
        rx={5}
        transform="translate(.333 .495)"
      />
    </g>
    <g transform="translate(17.667 26.986)">
      <rect
        className="menu_svg__a"
        width={84}
        height={13}
        rx={5}
        transform="translate(.333 7.014)"
      />
      <rect
        className="menu_svg__b"
        width={84}
        height={12}
        rx={5}
        transform="translate(.333 4.014)"
      />
      <rect
        className="menu_svg__c"
        width={84}
        height={13}
        rx={5}
        transform="translate(.333 .014)"
      />
    </g>
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h120v120H0z"
    />
  </svg>
);

export default SvgMenu;

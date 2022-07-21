import * as React from "react";
import { SVGProps } from "react";

const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
          ".filter_svg__b{fill:#dadada}.filter_svg__c{fill:#fff}.filter_svg__d{fill:rgba(0,0,0,.3)}.filter_svg__e{fill:#c9b81f}.filter_svg__f{fill:#ffed00}"
        }
      </style>
    </defs>
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h120v120H0z"
    />
    <g transform="translate(-6568.158 -4852.486)">
      <rect
        className="filter_svg__b"
        width={89.822}
        height={7.859}
        rx={3.93}
        transform="translate(6583.247 4884.963)"
      />
      <path
        className="filter_svg__c"
        d="M6669.139 4887.548h-81.962a2.788 2.788 0 1 0 0 5.274h81.962a2.788 2.788 0 1 0 0-5.274Z"
      />
      <circle
        className="filter_svg__d"
        cx={8.327}
        cy={8.327}
        r={8.327}
        transform="translate(6602.334 4884.472)"
      />
      <circle
        className="filter_svg__e"
        cx={8.327}
        cy={8.327}
        r={8.327}
        transform="translate(6602.334 4880.472)"
      />
      <circle
        className="filter_svg__f"
        cx={5.36}
        cy={5.36}
        r={5.36}
        transform="translate(6605.301 4882.195)"
      />
      <rect
        className="filter_svg__b"
        width={89.822}
        height={7.859}
        rx={3.93}
        transform="rotate(-180 3336.535 2458.2)"
      />
      <path
        className="filter_svg__c"
        d="M6587.176 4911.126h81.963a2.789 2.789 0 1 1 0 5.275h-81.963a2.789 2.789 0 1 1 0-5.275Z"
      />
      <circle
        className="filter_svg__d"
        cx={8.327}
        cy={8.327}
        r={8.327}
        transform="translate(6637.326 4908.05)"
      />
      <circle
        className="filter_svg__e"
        cx={8.327}
        cy={8.327}
        r={8.327}
        transform="translate(6637.327 4904.05)"
      />
      <circle
        className="filter_svg__f"
        cx={5.36}
        cy={5.36}
        r={5.36}
        transform="translate(6640.293 4905.773)"
      />
      <rect
        className="filter_svg__b"
        width={89.822}
        height={7.859}
        rx={3.93}
        transform="translate(6583.247 4932.12)"
      />
      <path
        className="filter_svg__c"
        d="M6669.139 4934.7h-81.962a2.789 2.789 0 1 0 0 5.275h81.962a2.789 2.789 0 1 0 0-5.275Z"
      />
      <circle
        className="filter_svg__d"
        cx={8.327}
        cy={8.327}
        r={8.327}
        transform="translate(6602.334 4931.628)"
      />
      <circle
        className="filter_svg__e"
        cx={8.327}
        cy={8.327}
        r={8.327}
        transform="translate(6602.334 4927.628)"
      />
      <circle
        className="filter_svg__f"
        cx={5.36}
        cy={5.36}
        r={5.36}
        transform="translate(6605.301 4929.352)"
      />
    </g>
  </svg>
);

export default SvgFilter;

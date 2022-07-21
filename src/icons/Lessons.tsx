import * as React from "react";
import { SVGProps } from "react";

const SvgLessons = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 121.363 120"
    {...props}
  >
    <defs>
      <style>
        {
          ".lessons_svg__a,.lessons_svg__b{stroke:transparent}.lessons_svg__a{opacity:.3}.lessons_svg__b{fill:#5f89ff}"
        }
      </style>
    </defs>
    <path
      className="lessons_svg__a"
      d="M17.309 88.726 15.591 63.07l-11.2.75-1.647-24.6 44.658-2.99 1.647 24.6-11.2.75 1.718 25.655ZM110.471 63.855l-3.756-9.552-3.756 9.552-8.542 3.357-4.954-1.959 8.783-3.451 9.232-21.029-21.944-1.9-6.208 6.546-4.991-7.518-21.944-1.9 12.593 51.148a128.434 128.434 0 0 0 21.326 1.847l9.056-20.63 7.594 3 3.756 9.529 3.756-9.529 9.529-3.768Z"
    />
    <path
      className="lessons_svg__b"
      d="M17.309 79.726 15.591 54.07l-11.2.75-1.647-24.6 44.658-2.99 1.647 24.6-11.2.75 1.718 25.655ZM110.471 54.855l-3.756-9.552-3.756 9.552-8.542 3.357-4.954-1.959 8.783-3.451 9.232-21.029-21.944-1.9-6.208 6.546-4.991-7.518-21.944-1.9 12.593 51.148a128.434 128.434 0 0 0 21.326 1.847l9.056-20.63 7.594 3 3.756 9.529 3.756-9.529 9.529-3.768Z"
    />
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h119.878v120H0z"
    />
  </svg>
);

export default SvgLessons;

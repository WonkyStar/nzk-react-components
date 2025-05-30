import * as React from "react";
import type { SVGProps } from "react";
const SvgDrawingToolEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    {...props}
  >
    <path
      d="m88.485 48.692-14.9-14.9a5.14 5.14 0 0 0-7.276 0L45.49 54.61a5.1 5.1 0 0 1 1.634 1.095l14.9 14.9a5.146 5.146 0 0 1 .008 7.268l-8.336 8.337a5.14 5.14 0 0 1-7.277 0L31.514 71.305a5.1 5.1 0 0 1-.952-1.364 5.13 5.13 0 0 0 .952 5.912l14.905 14.9a5.14 5.14 0 0 0 7.277 0l34.789-34.787a5.15 5.15 0 0 0 0-7.274"
      opacity={0.3}
    />
    <path
      fill="current"
      d="m88.485 44.144-14.9-14.9a5.14 5.14 0 0 0-7.276 0L31.518 64.033l8.331-8.331a5.14 5.14 0 0 1 7.277 0l14.9 14.9a5.146 5.146 0 0 1 .008 7.268l-8.336 8.337 34.789-34.788a5.15 5.15 0 0 0-.002-7.275"
    />
    <path
      fill="rgba(0,0,0)"
      d="M88.485 45.875 53.696 80.662a5.14 5.14 0 0 1-7.277 0l-14.905-14.9a5 5 0 0 1-.688-.865 5.144 5.144 0 0 0 .688 6.413l14.905 14.905a5.14 5.14 0 0 0 7.277 0l34.789-34.788a5.144 5.144 0 0 0 .69-6.413 5 5 0 0 1-.69.861"
      opacity={0.5}
    />
    <path fill="none" d="M0 0h120v120H0z" />
  </svg>
);
export default SvgDrawingToolEraser;

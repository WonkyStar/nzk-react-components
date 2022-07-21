import * as React from "react";
import { SVGProps } from "react";

const SvgPlayVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    {...props}
  >
    <path
      d="M1188.155 134.894v63.6c0 6.615 6.842 10.737 12.292 7.405l52.009-31.8a8.787 8.787 0 0 0 0-14.809l-52.009-31.8c-5.447-3.332-12.292.79-12.292 7.404Z"
      transform="translate(-1157.155 -103.607)"
      style={{
        opacity: 0.3,
      }}
    />
    <path
      d="M1188.155 134.894v63.6c0 6.615 6.842 10.737 12.292 7.405l52.009-31.8a8.787 8.787 0 0 0 0-14.809l-52.009-31.8c-5.447-3.332-12.292.79-12.292 7.404Z"
      style={{
        fill: "#c6c6c6",
      }}
      transform="translate(-1157.155 -110.607)"
    />
    <path
      d="M1194.872 136.629v52.317c0 5.441 5.628 8.831 10.11 6.09l42.78-26.158a7.228 7.228 0 0 0 0-12.181l-42.78-26.158c-4.482-2.739-10.11.649-10.11 6.09Z"
      style={{
        fill: "#ededed",
      }}
      transform="translate(-1157.155 -110.607)"
    />
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h120v120H0z"
    />
  </svg>
);

export default SvgPlayVideo;

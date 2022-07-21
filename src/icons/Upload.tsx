import * as React from "react";
import { SVGProps } from "react";

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    {...props}
  >
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h120v120H0z"
    />
    <path
      d="m1102.23-184.595-30.2-33.8-30.2 33.8v6.225h17.47v29.97h25.465v-29.972h17.464Z"
      transform="translate(-1012.033 246.065)"
      style={{
        opacity: 0.3,
      }}
    />
    <path
      d="m1102.23-184.595-30.2-33.8-30.2 33.8v6.225h17.47v29.97h25.465v-29.972h17.464Z"
      style={{
        fill: "#afafaf",
      }}
      transform="translate(-1012.033 241.065)"
    />
    <path
      d="m1102.23-184.595-30.2-33.8-30.2 33.8h17.47v29.972h25.465v-29.972Z"
      style={{
        fill: "#fff",
      }}
      transform="translate(-1012.033 241.065)"
    />
  </svg>
);

export default SvgUpload;

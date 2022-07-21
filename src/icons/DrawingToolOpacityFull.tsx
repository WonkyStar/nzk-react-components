import * as React from "react";
import { SVGProps } from "react";

const SvgDrawingToolOpacityFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    {...props}
  >
    <path
      d="M60.034 98.748a35.994 35.994 0 0 1-35.826-32.587 36.284 36.284 0 0 0-.173 3.412 36 36 0 0 0 72 0c0-1.152-.067-2.288-.173-3.412a35.992 35.992 0 0 1-35.828 32.587Z"
      fill="rgba(0,0,0)"
      opacity={0.3}
    />
    <path
      d="M96.002 56.568c0-.215.033-.424.033-.641s-.029-.425-.033-.64v-.136h-.006a35.969 35.969 0 0 0-71.922 0h-.108v8.8h.131a35.957 35.957 0 0 0 71.877 0h.028v-.57c0-.213.033-.421.033-.635s-.028-.422-.033-.635Z"
      fill="current"
    />
    <path
      d="M60.034 91.925a35.993 35.993 0 0 1-35.826-32.586 36.263 36.263 0 0 0-.173 3.411 36 36 0 0 0 72 0c0-1.152-.067-2.287-.173-3.411a35.991 35.991 0 0 1-35.828 32.586Z"
      fill="rgba(0,0,0)"
      opacity={0.5}
    />
    <path fill="none" d="M0 0h120v120H0z" />
  </svg>
);

export default SvgDrawingToolOpacityFull;

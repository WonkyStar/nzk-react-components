import * as React from "react";
import type { SVGProps } from "react";
const SvgDrawingToolOpacityHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    {...props}
  >
    <path fill="none" d="M0 0h120v120H0z" />
    <path
      fill="rgba(0,0,0)"
      d="M60.034 99.001a35.993 35.993 0 0 1-35.826-32.586 36 36 0 0 0-.173 3.412 36 36 0 0 0 72 0c0-1.152-.067-2.288-.173-3.412a35.99 35.99 0 0 1-35.828 32.586"
      opacity={0.3}
    />
    <path
      fill="current"
      d="M96.002 56.822c0-.216.033-.425.033-.641s-.029-.425-.033-.64v-.137h-.006a35.969 35.969 0 0 0-71.922 0h-.108v8.8h.131a35.957 35.957 0 0 0 71.877 0h.028v-.57c0-.214.033-.421.033-.635s-.028-.422-.033-.636ZM60.034 89.078v-65.8a32.9 32.9 0 0 1 0 65.8"
      opacity={0.7}
    />
    <path
      fill="rgba(0,0,0)"
      d="M60.034 92.178a35.993 35.993 0 0 1-35.826-32.586 36 36 0 0 0-.173 3.412 36 36 0 0 0 72 0c0-1.152-.067-2.288-.173-3.412a35.99 35.99 0 0 1-35.828 32.586"
      opacity={0.5}
    />
  </svg>
);
export default SvgDrawingToolOpacityHalf;

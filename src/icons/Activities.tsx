import * as React from "react";
import { SVGProps } from "react";

const SvgActivities = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    {...props}
  >
    <defs>
      <style>{".activities_svg__d{fill:#fff}"}</style>
    </defs>
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h120v120H0z"
    />
    <g
      style={{
        opacity: 0.3,
      }}
    >
      <path d="M84.726 9.427a35.252 35.252 0 0 1 2.777 70.4 26.955 26.955 0 0 1-43.765-.421 24.284 24.284 0 0 1-5.14.574 27.06 27.06 0 0 1-10.576-52 26.956 26.956 0 0 1 45.295-16.623 34.8 34.8 0 0 1 11.409-1.93Zm-40.7 86.83a10.854 10.854 0 1 1-10.853-10.854 10.856 10.856 0 0 1 10.851 10.854Z" />
      <path d="M32.949 103.352a10.82 10.82 0 0 0 10.735-9.669 10.8 10.8 0 0 0-21.247 1.389 10.835 10.835 0 0 0 10.512 8.28ZM87.281 76.065a35.348 35.348 0 0 0 32.5-35.121c0-.043-.005-.082-.005-.127a35.382 35.382 0 0 0-35.047-31.39 34.834 34.834 0 0 0-11.41 1.926 26.956 26.956 0 0 0-45.294 16.625 27.091 27.091 0 0 0-16.492 23.957 27.121 27.121 0 0 0 26.843 24.28 24.288 24.288 0 0 0 5.141-.572 26.956 26.956 0 0 0 43.764.419Z" />
    </g>
    <path
      d="M817.868 120.312a35.252 35.252 0 0 1 2.777 70.4 26.955 26.955 0 0 1-43.765-.421 24.284 24.284 0 0 1-5.14.574 27.06 27.06 0 0 1-10.576-52 26.956 26.956 0 0 1 45.295-16.623 34.8 34.8 0 0 1 11.409-1.93Zm-40.7 86.83a10.854 10.854 0 1 1-10.853-10.854 10.856 10.856 0 0 1 10.851 10.854Z"
      style={{
        fill: "#c6c6c6",
      }}
      transform="translate(-733.142 -114.885)"
    />
    <path
      className="activities_svg__d"
      d="M32.949 99.352a10.82 10.82 0 0 0 10.735-9.669 10.8 10.8 0 0 0-21.247 1.389 10.835 10.835 0 0 0 10.512 8.28ZM87.281 72.065a35.348 35.348 0 0 0 32.5-35.121c0-.043-.005-.082-.005-.127a35.382 35.382 0 0 0-35.047-31.39 34.834 34.834 0 0 0-11.41 1.926 26.956 26.956 0 0 0-45.294 16.625 27.091 27.091 0 0 0-16.492 23.957 27.121 27.121 0 0 0 26.843 24.28 24.288 24.288 0 0 0 5.141-.572 26.956 26.956 0 0 0 43.764.419Z"
    />
    <path
      d="M779.441 169.417a15.65 15.65 0 0 1-3.741-5.517 18.413 18.413 0 0 1-1.4-7.18 25.649 25.649 0 0 1 .764-6.666 20.761 20.761 0 0 1 5.344-9.426 18.61 18.61 0 0 1 4.052-3.172 18.914 18.914 0 0 1 9.676-2.672 13.149 13.149 0 0 1 8.942 3.377 11.982 11.982 0 0 1 2.143 2.5l4.2-4.492h9.631v36.5h-9.631l-4.2-6.078q-4.816 7.1-14.6 7.135a16.97 16.97 0 0 1-5.769-1.043 15.188 15.188 0 0 1-5.411-3.266Zm23.785-22.184a4.919 4.919 0 0 0-2.525-.617 5.79 5.79 0 0 0-3.1 1.043 12.363 12.363 0 0 0-2.922 2.627 11.429 11.429 0 0 0-2.878 7.225 4.046 4.046 0 0 0 1.586 3.64q1.469.971 4.478-.279a20.073 20.073 0 0 0 5.359-3.244Z"
      style={{
        fill: "#575756",
      }}
      transform="translate(-733.142 -114.885)"
    />
  </svg>
);

export default SvgActivities;

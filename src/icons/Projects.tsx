import * as React from "react";
import { SVGProps } from "react";

const SvgProjects = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 120 121.803"
    {...props}
  >
    <defs>
      <style>
        {".projects_svg__d{fill:#314c36}.projects_svg__e{fill:#fff}"}
      </style>
    </defs>
    <g transform="translate(568.809 -1283.805)">
      <path
        d="M-492.762 1368.032c1.957-12.7 19.134-17.685 19.134-37.28 0-16.012-17.543-27.333-35.665-27.333s-35.667 11.322-35.667 27.333c0 19.593 17.177 24.578 19.134 37.28h.153v14.878h.033v1.875c0 2.749 2.807 4.785 5.944 4.785h4.458v2.393c0 2.652 2.651 3.675 5.945 3.675s5.945-1.024 5.945-3.675v-2.393h4.458c3.136 0 5.945-2.036 5.945-4.785V1368.028Z"
        transform="translate(0 9.969)"
        style={{
          fill: "#231f20",
          opacity: 0.3,
        }}
      />
      <path
        transform="translate(-525.356 1369.617)"
        style={{
          fill: "#4a7250",
        }}
        d="M0 0h32.091v19.756H0z"
      />
      <path
        d="M-509.293 1287.607c-18.123 0-35.667 14.569-35.667 35.174 0 25.214 17.177 31.626 19.134 47.974h33.065c1.957-16.348 19.134-22.76 19.134-47.974-.001-20.605-17.543-35.174-35.666-35.174Z"
        style={{
          fill: "#fcf3a2",
        }}
      />
      <path
        className="projects_svg__d"
        d="M-525.323 1376.292h32.058v5.989h-32.058zM-525.322 1388.723v2.995a5.917 5.917 0 0 0 5.829 5.989h4.371v2.995c0 3.318 2.6 3.383 5.829 3.383s5.829-.065 5.829-3.383v-2.996h4.371a5.918 5.918 0 0 0 5.829-5.989v-2.995Z"
      />
      <path
        className="projects_svg__e"
        d="M-513.219 1295.281c1.9-.093 3.51.9 3.46 2.854a3.077 3.077 0 0 1-2.822 3.088 22.207 22.207 0 0 0-19.263 22.32 23.028 23.028 0 0 0 .956 6.6 3.132 3.132 0 0 1-1.867 3.977 3.012 3.012 0 0 1-3.688-2.247 28.929 28.929 0 0 1-1.229-8.329c-.001-14.55 10.69-26.614 24.453-28.263Z"
      />
      <ellipse
        className="projects_svg__e"
        cx={19.764}
        cy={25.779}
        rx={19.764}
        ry={25.779}
        transform="translate(-528.807 1299.757)"
      />
    </g>
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h120v120H0z"
      transform="translate(0 1.59)"
    />
  </svg>
);

export default SvgProjects;

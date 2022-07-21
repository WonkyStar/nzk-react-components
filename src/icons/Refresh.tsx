import * as React from "react";
import { SVGProps } from "react";

const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
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
          ".refresh_svg__b{opacity:.3}.refresh_svg__c{fill:#afafaf}.refresh_svg__d{fill:#fff}"
        }
      </style>
    </defs>
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h120v120H0z"
    />
    <path
      className="refresh_svg__b"
      d="M76.951 46.985a23.808 23.808 0 0 1 5.646 8.983c.834 2.4 2.792 7.636-.413 8.948a6.549 6.549 0 0 1-2.2.39 24.044 24.044 0 0 1-3.254-.07c-.358-.032-.819-.012-.943.325a.8.8 0 0 0-.03.3c.041 1.747-.5 4.589.861 5.953L88.293 83.49a2.83 2.83 0 0 0 3.947 0l11.758-11.758c1.52-1.52.929-4.3.627-6.192a3.875 3.875 0 0 0-2.529-.154 5.348 5.348 0 0 1-2.993-.022c-2.421-1.026-1.813-3.863-2.082-5.974a38.64 38.64 0 0 0-1.874-7.946 37.132 37.132 0 0 0-8.745-13.917 37.253 37.253 0 0 0-20.392-10.41 37.482 37.482 0 0 0-11.411-.056c-1.8.269-3.561.84-5.36 1.049-2.378.275-4.758.332-7.131.717a2.387 2.387 0 0 0-1.8.9 2.4 2.4 0 0 0-.22 1.125c-.05 1.626-.516 3.914.766 5.2l5.756 5.756a2.984 2.984 0 0 0 3.289.493 23.839 23.839 0 0 1 27.052 4.684ZM43.322 80.614a23.646 23.646 0 0 1-6.907-16.773 2.773 2.773 0 0 1 2.8-2.8h3.124c2.676 0 3.252-3.238 3.037-5.319a3.776 3.776 0 0 0-1.282-2.6 4.227 4.227 0 0 0-2.516-.767 4.018 4.018 0 0 1-1.386-.165c-.77-.308-1.662-1.7-2.244-2.277q-1.456-1.458-2.915-2.915l-2.972-2.972a2.83 2.83 0 0 0-3.947 0c-3.057 3.057-6.03 7.218-10.12 8.81l-1.528.6a2.424 2.424 0 0 0-1.041.624 2.361 2.361 0 0 0-.393 1.412c-.107 2.113-.055 5.5 2.887 5.5h2.466a2.679 2.679 0 0 1 2.714 2.878 36.725 36.725 0 0 0 10.853 26.147 37.192 37.192 0 0 0 44.977 5.838c1.909-1.115 1.648-4.03 1.445-5.9a2.327 2.327 0 0 0-.272-.99c-.464-.741-1.5-.771-2.356-.95a8.526 8.526 0 0 1-4-2.279 2.984 2.984 0 0 0-3.289-.493 23.787 23.787 0 0 1-27.135-4.609Z"
    />
    <path
      className="refresh_svg__c"
      d="M76.951 42.985a23.808 23.808 0 0 1 5.646 8.983c.834 2.4 2.792 7.636-.413 8.948a6.549 6.549 0 0 1-2.2.39 24.044 24.044 0 0 1-3.254-.07c-.358-.032-.819-.012-.943.325a.8.8 0 0 0-.03.3c.041 1.747-.5 4.589.861 5.953L88.293 79.49a2.83 2.83 0 0 0 3.947 0l11.758-11.758c1.52-1.52.929-4.3.627-6.192a3.875 3.875 0 0 0-2.529-.154 5.348 5.348 0 0 1-2.993-.022c-2.421-1.026-1.813-3.863-2.082-5.974a38.64 38.64 0 0 0-1.874-7.946 37.132 37.132 0 0 0-8.745-13.917 37.253 37.253 0 0 0-20.392-10.41 37.482 37.482 0 0 0-11.411-.056c-1.8.269-3.561.84-5.36 1.049-2.378.275-4.758.332-7.131.717a2.387 2.387 0 0 0-1.8.9 2.4 2.4 0 0 0-.22 1.125c-.05 1.626-.516 3.914.766 5.2l5.756 5.756a2.984 2.984 0 0 0 3.289.493 23.839 23.839 0 0 1 27.052 4.684ZM43.322 76.614a23.646 23.646 0 0 1-6.907-16.773 2.773 2.773 0 0 1 2.8-2.8h3.124c2.676 0 3.252-3.238 3.037-5.319a3.776 3.776 0 0 0-1.282-2.6 4.227 4.227 0 0 0-2.516-.767 4.018 4.018 0 0 1-1.386-.165c-.77-.308-1.662-1.7-2.244-2.277q-1.456-1.458-2.915-2.915l-2.972-2.972a2.83 2.83 0 0 0-3.947 0c-3.057 3.057-6.03 7.218-10.12 8.81l-1.528.6a2.424 2.424 0 0 0-1.041.624 2.361 2.361 0 0 0-.393 1.412c-.107 2.113-.055 5.5 2.887 5.5h2.466a2.679 2.679 0 0 1 2.714 2.878 36.725 36.725 0 0 0 10.853 26.147 37.192 37.192 0 0 0 44.977 5.838c1.909-1.115 1.648-4.03 1.445-5.9a2.327 2.327 0 0 0-.272-.99c-.464-.741-1.5-.771-2.356-.95a8.526 8.526 0 0 1-4-2.279 2.984 2.984 0 0 0-3.289-.493 23.787 23.787 0 0 1-27.135-4.609Z"
    />
    <path
      className="refresh_svg__d"
      d="M76.951 39.332a23.885 23.885 0 0 1 6.994 17.346 2.881 2.881 0 0 1-2.8 2.8h-2.631a2.727 2.727 0 0 0-1.891 4.686L88.298 75.84a2.83 2.83 0 0 0 3.947 0l11.758-11.758a2.808 2.808 0 0 0-1.973-4.769h-1.974a2.676 2.676 0 0 1-2.713-2.878 37.746 37.746 0 0 0-10.936-26.558 37.189 37.189 0 0 0-44.976-5.838 2.761 2.761 0 0 0-.576 4.358l5.756 5.756a2.984 2.984 0 0 0 3.289.493 23.839 23.839 0 0 1 27.051 4.686ZM43.322 72.961a23.646 23.646 0 0 1-6.907-16.773 2.773 2.773 0 0 1 2.8-2.8h3.124a2.809 2.809 0 0 0 1.974-4.769L32.061 36.368a2.83 2.83 0 0 0-3.947 0L15.945 48.537a2.808 2.808 0 0 0 1.974 4.769h2.466a2.679 2.679 0 0 1 2.714 2.878 36.724 36.724 0 0 0 10.853 26.147 37.192 37.192 0 0 0 44.977 5.838 2.761 2.761 0 0 0 .575-4.358l-5.755-5.756a2.984 2.984 0 0 0-3.289-.493 23.785 23.785 0 0 1-27.138-4.601Z"
    />
  </svg>
);

export default SvgRefresh;

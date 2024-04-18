import * as React from "react";
import { SVGProps } from "react";

const SvgPoetry = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 70 70"
    {...props}
  >
    <defs>
      <clipPath id="poetry_svg__a">
        <path data-name="Rectangle 3323" fill="none" d="M0 0h70v70H0z" />
      </clipPath>
      <clipPath id="poetry_svg__b">
        <path
          data-name="Rectangle 3320"
          transform="translate(23.28 48.107)"
          fill="none"
          d="M0 0h37.152v12.241H0z"
        />
      </clipPath>
      <clipPath id="poetry_svg__c">
        <path
          data-name="Rectangle 3321"
          transform="translate(22.978 51.831)"
          fill="none"
          d="M0 0h.962v8.325H0z"
        />
      </clipPath>
    </defs>
    <g data-name="Group 8396">
      <g data-name="Group 8395" clipPath="url(#poetry_svg__a)">
        <g data-name="Group 8394">
          <g data-name="Group 8393" clipPath="url(#poetry_svg__a)">
            <path
              data-name="Path 5893"
              d="M19.475 25.826s-1.3 15.109 4.621 17.167 16.154 3.449 25.34-19.34c0 0-7.306-1.513-7.237-1.785s9.343-1.033 11.809-8.675S58.293 0 58.293 0 20.848 5.558 22.287 27.843Z"
              fill="#90bc1f"
            />
            <path
              data-name="Path 5894"
              d="M24.269 43.053c5.949 2.023 16.069 3.17 25.167-19.4 0 0-7.306-1.513-7.237-1.785s9.343-1.033 11.809-8.675S58.293 0 58.293 0c-23.36 12.538-31.424 30.133-34.024 43.053"
              fill="#008836"
            />
            <g data-name="Group 8389" opacity={0.3}>
              <g data-name="Group 8388">
                <g data-name="Group 8387" clipPath="url(#poetry_svg__b)">
                  <path
                    data-name="Path 5895"
                    d="M50.024 53.513c3.849-1.031 7.982-2.245 10.408-5.406-2.058 1.106-4.5 1.161-6.83 1.232-7.3.219-15.033.99-20.871 5.379-2.284 1.717-4.33 4.007-7.12 4.621a8.261 8.261 0 0 0-2.331.593c1.157 1.142 4.212-.386 5.559-.746l7.261-1.944 13.927-3.729"
                  />
                </g>
              </g>
            </g>
            <path
              data-name="Path 5896"
              d="M23.381 60.156c-1.745-6.052-.848-12.494.448-18.543C26.81 28.41 34.236 17.251 44.656 8.725A80.79 80.79 0 0 1 58.293 0a86.511 86.511 0 0 0-11.41 7.8 60.436 60.436 0 0 0-21.611 34.137 74.622 74.622 0 0 0-1.528 13.581 222.86 222.86 0 0 0-.132 4.6Z"
              fill="#fff"
            />
            <g
              data-name="Group 8392"
              opacity={0.46}
              style={{
                mixBlendMode: "normal",
                isolation: "isolate",
              }}
            >
              <g data-name="Group 8391">
                <g data-name="Group 8390" clipPath="url(#poetry_svg__c)">
                  <path
                    data-name="Path 5897"
                    d="M23.744 55.518c.053-1.229.115-2.459.2-3.686s-1.72 1.665-.558 8.323l.231-.039c.028-1.546.069-3.075.132-4.6"
                    fill="#063"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default SvgPoetry;

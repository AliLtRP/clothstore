import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 18.667V10m0 0V1.333M10 10h8.667M10 10H1.333"
    />
  </svg>
)
export default SvgComponent

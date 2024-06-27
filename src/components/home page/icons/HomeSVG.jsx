import * as React from "react"
const HomeSVG = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke={props.color || "#000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m3.769 9 8.654-7 8.654 7v11c0 .53-.203 1.04-.564 1.414-.36.375-.85.586-1.36.586H5.694c-.51 0-1-.21-1.36-.586A2.041 2.041 0 0 1 3.768 20V9Z"
        />
        <path
            stroke={props.color || "#000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.538 22V12h5.77v10"
        />
    </svg>
)
export default HomeSVG

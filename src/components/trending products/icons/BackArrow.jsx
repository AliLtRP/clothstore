import * as React from "react"
const BackArrow = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={21}
        fill="none"
        {...props}
    >
        <path
            stroke="#000"
            strokeWidth={2}
            d="M10.5 1 1.707 9.793a1 1 0 0 0 0 1.414L10.5 20"
        />
    </svg>
)
export default BackArrow

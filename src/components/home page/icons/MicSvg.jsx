import * as React from "react"
const MicSvg = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={19}
        fill="none"
        {...props}
    >
        <path
            fill="#BBB"
            d="M7 12c1.66 0 2.99-1.34 2.99-3L10 3c0-1.66-1.34-3-3-3S4 1.34 4 3v6c0 1.66 1.34 3 3 3ZM5.8 2.9c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V2.9ZM12.3 9c0 3-2.54 5.1-5.3 5.1S1.7 12 1.7 9H0c0 3.41 2.72 6.23 6 6.72V19h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7Z"
        />
    </svg>
)
export default MicSvg

import * as React from "react"
const HumMenu = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <rect width={32} height={32} fill="#F2F2F2" rx={16} />
        <g clipPath="url(#a)">
            <path
                fill="#323232"
                d="M25 15.01 7 15v2h18v-1.99ZM7 20h12v2H7v-2Zm18-10H7v2.01L25 12v-2Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <rect width={24} height={24} x={4} y={4} fill="#fff" rx={12} />
            </clipPath>
        </defs>
    </svg>
)
export default HumMenu;

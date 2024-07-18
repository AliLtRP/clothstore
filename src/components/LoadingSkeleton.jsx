import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoadingSkeleton = ({height}) => {
    return (
        <div className="flex flex-col gap-1"> <Skeleton height={height || 200} /> <Skeleton height={height || 200} /> <Skeleton height={height || 200} /> </div>
    )
}

export default LoadingSkeleton
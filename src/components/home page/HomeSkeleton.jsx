import React from 'react'
import Skeleton from 'react-loading-skeleton'

const HomeSkeleton = () => {
    return (
        <>
            <div className="flex h-full items-center gap-1.5 mb-[-2px] px-4">
                <Skeleton height={20} width={100} className="mb-11" />
            </div>
            <div className="flex gap-4 mt-[-30px] px-4">
                <div className="flex flex-col gap-1.5">
                    <Skeleton height={170} width={165} borderRadius={10} />
                    <Skeleton width={165} height={20} />
                    <Skeleton width={140} height={15} />
                </div>
                <div className="flex flex-col gap-1.5">
                    <Skeleton height={170} width={165} borderRadius={10} />
                    <Skeleton width={165} height={20} />
                    <Skeleton width={140} height={15} />
                </div>

            </div>
            <div className="mt-[-25px] px-4">
                <Skeleton height={200} width={350} borderRadius={10} className="mb-[-70px]" />
            </div>
        </>
    )
}

export default HomeSkeleton
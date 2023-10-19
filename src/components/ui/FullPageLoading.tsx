'use client'

import { Spinner } from '@nextui-org/react'

interface Props {
    isHome?: boolean
}

export const FullPageLoading = ({ isHome = false }:Props) => {
    const getHeight = isHome ? 'h-[calc(100vh-(64px+(40px*6)))]' : 'h-[calc(100vh-64px)]'
    const getAbsoluteStyle = isHome ? '' : 'absolute top-0 left-0 right-0 mx-auto -z-10' 

    return (
        <div className={`${getHeight} grid place-content-center ${getAbsoluteStyle}`}>
            <Spinner
                color="primary"
                classNames={{
                    circle1: "border-b-foreground",
                    circle2: "border-b-foreground"
                }}
            />
        </div>
    )
}

'use client'

import { Link } from '@nextui-org/react'

export const Credits = () => {
    return (
        <div className="text-xs tracking-wider font-normal text-foreground text-opacity-70 hidden md:block lg:fixed lg:bottom-0 lg:right-0 lg:mr-4 lg:mb-4 [writing-mode:vertical-rl]">
            Challenge by <Link className="text-xs" href="https://www.frontendmentor.io/profile/RafaelSS427" color='foreground' isExternal showAnchorIcon>Frontend Mentor</Link>.
            Coded by <Link className="text-xs" href="https://www.rafael-sequeira-sandoval.dev" color='foreground' isExternal showAnchorIcon>Rafael Sequeira Sandoval</Link>
        </div>
    )
}
'use client'

import { FC } from 'react'
import { ItemCountry } from './ItemCountry'

interface Props {
    countries: string[]
}

const BorderCountries:FC<Props> = ({ countries }) => {

    return (
        <div className="flex gap-2 h-5 flex-wrap">
            {
                countries.map(country => (
                    <ItemCountry key={country} code={country} />
                ))
            }
        </div>
    )
}

export default BorderCountries
// 'use client'

import { ShowCountryInfo } from '@/components/country/ShowCountryInfo'
import { ButtonBack } from '@/components/country'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Country Page',
}

const CountryPage = () => {
    return (
        <div className="mt-4">
            <div className="my-8">
                <ButtonBack />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ShowCountryInfo />
            </div>
        </div>
    )
}

export default CountryPage
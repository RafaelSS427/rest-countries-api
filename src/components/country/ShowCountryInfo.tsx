'use client'

import { Fragment, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import { Image } from '@nextui-org/react'
import { FullPageLoading, InfoText } from '../'
import BorderCountries from './BorderCountries'
import { API_SEARCH_COUNTRY, FIELDS_COUNTRY, FIELDS_HOME } from '@/config'
import { Country, Currencies } from '@/types'

export const ShowCountryInfo = () => {
    const params = useSearchParams()
    const router = useRouter()

    const { data, isLoading, error } = useSWR<Country[]>(`${API_SEARCH_COUNTRY}/${params.get('q')}?fullText=true&${FIELDS_HOME},${FIELDS_COUNTRY}`, {
        onErrorRetry: (error) => {
            if(error.status === 404){
                router.push('/404')
            }
        }
    })

    if (isLoading) {    
        return <FullPageLoading />
    }

    if (error) {
        return null
    }

    const [country] = data || []

    const getNativeName = () => {
        if (!country.languages || !country.name.nativeName) return country.name.common
        const languages = Object.keys(country.languages)
        const nativeLanguage = languages.length > 1 ? languages[languages.length - 1] : languages[0]
        return country.name.nativeName[nativeLanguage].common
    }

    const getCurrencies = (currencies: Currencies) => {
        const currenciesKeys = Object.keys(currencies)
        const list = currenciesKeys.map(e => {
            const value = currencies[e as keyof typeof currencies]

            if (value) {
                return value.name
            }

            return null
        }).filter(e => e !== null)

        return list.join(', ')
    }

    const getLanguages = (languages: { [key: string]: string }) => {
        const languagesKey = Object.keys(languages)
        const listLanguages = languagesKey.map(e => languages[e as keyof typeof languages])
        return listLanguages.join(', ')
    }

    return (
        <Fragment>
            <div>
                <figure>
                    <Image
                        radius="none"
                        src={country.flags.svg}
                        width="100%"
                        className="w-full object-fill h-[225px] sm:h-[325px]"
                        alt={country.flags.alt || "The flag of a country"}
                    />
                </figure>
            </div>

            <div className="pl-0 lg:pl-16 flex items-center">
                <div className="sm:min-w-[400px]">
                    <h1 className="text-2xl font-bold sm:text-2xl mb-4">{country.name.common}</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8">
                        <div className="flex flex-col gap-2">
                            <InfoText title="Native name" text={getNativeName()} />
                            <InfoText title="Population" text={country.population.toLocaleString('es-ES', { useGrouping: true })} />
                            <InfoText title="Region" text={country.region} />
                            {
                                country.subregion && (
                                    <InfoText title="Sub Region" text={country.subregion} />
                                )
                            }

                            {
                                country.capital && (
                                    <InfoText title="Capital" text={country.capital[0]} />
                                )
                            }
                        </div>
                        <div className="flex flex-col gap-2">
                            {
                                country.tld && (
                                    <InfoText title="Top Level Domain" text={country.tld[0]} />
                                )
                            }

                            {
                                country.currencies && (
                                    <InfoText title="Currencies" text={getCurrencies(country.currencies)} />
                                )
                            }

                            {
                                country.languages && (
                                    <InfoText title="Languages" text={getLanguages(country.languages)} />
                                )
                            }
                        </div>
                    </div>


                    {
                        country.borders && country.borders.length > 0 && (
                            <div className="my-8">
                                <div className="flex gap-2 flex-wrap">
                                    <h6 className="text-sm">Border Countries:</h6>

                                    <BorderCountries countries={[...country.borders]} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}

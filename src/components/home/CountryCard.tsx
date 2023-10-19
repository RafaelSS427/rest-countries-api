'use client'

import { FC } from 'react'
import NextLink from 'next/link'
import { Card, CardBody, Image } from '@nextui-org/react'
import { InfoText } from '../ui'
import { Country } from '@/types'

interface Props {
    country: Country
}

export const CountryCard: FC<Props> = ({ country }) => {
    return (
        <Card as={NextLink} href={`/country?q=${country.name.common.toLocaleLowerCase()}`} shadow="sm" radius="none" className="w-[80%] sm:w-[100%] rounded-md" isHoverable>
            <CardBody className="p-0">
                <Image
                    radius="none"
                    src={country.flags.svg}
                    width="100%"
                    className="w-full object-cover h-[150px] rounded-t-md"
                    alt={ country.flags.alt || "The flag of a country" }
                    loading="lazy"
                />

                <div className="p-4">
                    <h6 className="mb-3 font-[500]">{country.name.common}</h6>

                    <div className="flex flex-col gap-1 mb-6">
                        <InfoText title='Population' text={country.population.toLocaleString('es-ES', { useGrouping: true })} />
                        <InfoText title='Region' text={country.region} />
                        {
                            country.capital && country.capital.length > 0 && (
                                <InfoText title='Capital' text={country.capital[0]} />
                            )
                        }
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
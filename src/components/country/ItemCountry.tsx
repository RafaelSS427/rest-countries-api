'use client'

import { FC, Fragment } from 'react'
import useSWR from 'swr'
import { Button, Skeleton } from '@nextui-org/react'
import { CustomLink } from '../'
import { Name } from '@/types'

type ItemCountryData = {
    name: Name
}

interface Props {
    code: string
}

export const ItemCountry: FC<Props> = ({ code }) => {
    const { data, isLoading } = useSWR<ItemCountryData>(`https://restcountries.com/v3.1/alpha/${code}?fields=name`)

    if (isLoading) {
        return (
            <Skeleton className="rounded-md">
                <div className="w-[64px] h-[20px] rounded-md bg-default-300"></div>
            </Skeleton>
        )
    }

    return (
        <Fragment>
            {
                data && (
                    <Button
                        as={CustomLink}
                        href={`/country?q=${data.name.common.toLocaleLowerCase()}`}
                        color="primary"
                        radius="none"
                        className="shadow-sm rounded-md h-full text-[11px] font-normal text-foreground text-opacity-70 hover:text-foreground border-solid border-1 border-primary-foreground border-opacity-5"
                        size="sm"
                    >
                        {data.name.common}
                    </Button>
                )
            }
        </Fragment>
    )
}
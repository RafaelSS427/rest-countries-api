'use client'

import { FC, PropsWithChildren } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { SWRConfig } from 'swr'
import { notFound } from 'next/navigation'

interface ErrorResponse {
    message: string;
}

const fetcher = async (resource: any, init: any) => {
    const res = await fetch(resource, init)

      if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.') as Error & {
          info: ErrorResponse;
          status: number;
        }
      
        error.info = await res.json() as ErrorResponse
        error.status = res.status
        throw error
      }

    return await res.json();
}

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <SWRConfig
                    value={{
                        fetcher,
                        // onError: (error, key) => {
                        //     if (error.status === 404) {
                        //       notFound()
                        //     }
                        //   }
                    }}
                >
                    {children}
                </SWRConfig>
            </NextThemesProvider>
        </NextUIProvider>
    )
}
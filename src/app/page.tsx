'use client'

import { useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import { Waypoint } from 'react-waypoint'
import { CountryCard, FilterInputs, FullPageLoading } from '@/components'
import { useGlobalStore } from '@/store'
import { getUrlHome } from '@/utils'
import { Country } from '@/types'

export default function Home() {
  const params = useSearchParams()
  const { data, isLoading } = useSWR<Country[]>(getUrlHome(params.get('q'), params.get('f')), {
    refreshInterval: (params.get('q') || params.get('f')) ? 0 : undefined,
    revalidateOnFocus: (params.get('q') || params.get('f')) ? false : undefined,
  })

  const { pageCount, inc } = useGlobalStore()
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="my-5">
      <FilterInputs />

      {
        isLoading ? (
          <FullPageLoading isHome />
        ) : (
          <>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10" ref={containerRef}>
              {
                data && data.slice(0, pageCount * 10).map(country => (
                  <div key={country.name.common} className="flex justify-center">
                    <CountryCard country={country} />
                  </div>
                ))
              }
            </div>


            <Waypoint
              scrollableAncestor="window"
              bottomOffset="-100px"
              onEnter={(e) => {
                if (!data || !containerRef.current) return
                if ((containerRef.current.childElementCount) === data.length) return

                if (e.previousPosition === Waypoint.below) {
                  inc()
                }
              }}
            />
          </>
        )
      }

    </div>
  )
}
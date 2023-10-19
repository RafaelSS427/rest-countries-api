'use client'

import { ChangeEvent, useRef, useState } from 'react'
import { Input, Select, SelectItem } from '@nextui-org/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import { useGlobalStore } from '@/store'

export const animals = [
  {label: "All", value: "all", description: "All regions"},
  {label: "America", value: "america", description: "Region 2"},
  {label: "Asia", value: "asia", description: "Region 3"},
  {label: "Europe", value: "europe", description: "Region 4"},
  {label: "Oceania", value: "oceania", description: "Region 5"},
];

export const FilterInputs = () => {
  const params = useSearchParams()
  const router = useRouter()
  const [selectedValue, setSelectedValue] = useState<any>(new Set([]))
  // const [selectedValue, setSelectedValue] = useState<string>()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { reset } = useGlobalStore()

  const handleSearch = () => {
    if (!inputRef.current) return

    selectedValue && setSelectedValue(new Set([]))

    reset()
    router.push(`/?q=${inputRef.current.value}`)
  }
  
  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    
    const value = e.target.value

    if (!inputRef.current) return
    
    if(inputRef.current.value) {
      inputRef.current.value = ''
    }
    
    reset()
    if(value === 'all' || !value){
      setSelectedValue(new Set([]))
      return router.push(`/`)
    }
    
    router.push(`/?f=${value}`)
  }

  return (
    <div className="my-10 flex flex-wrap justify-between gap-4">
      <Input
        ref={inputRef}
        // size="lg"
        defaultValue={params.get('q') || undefined}
        type="text"
        placeholder="Search for a country..."
        startContent={<MagnifyingGlassIcon onClick={handleSearch} role="button" className="w-4 h-4 text-foreground mx-4" />}
        color="primary"
        radius="none"
        className="max-w-sm shadow-sm"
        isClearable
        onClear={() => router.push(`/`)}
        classNames={{
          clearButton: ["text-foreground"],
          inputWrapper: ["rounded-md"],
          input: ["placeholder:font-normal", "placeholder:text-sm", "placeholder:text-primary-foreground", "placeholder:text-opacity-70", "text-primary-foreground "]
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            handleSearch()
          }
        }}
      />

      <Select
        aria-label="Filter by region"
        color="primary"
        radius="none"
        labelPlacement="outside"
        placeholder="Filter by Region"
        className="max-w-[175px]"
        selectedKeys={selectedValue}
        classNames={{
          value: ["font-normal", "text-sm", "text-primary-foreground"],
          selectorIcon: ["text-primary-foreground"],
          trigger: ["rounded-md"]
        }}
        size="md"
        onChange={handleFilter}
        onSelectionChange={setSelectedValue}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
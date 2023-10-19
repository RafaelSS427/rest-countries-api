'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

export const ButtonBack = () => {
    const router = useRouter()

    return (
        <Button
            onPress={() => router.back()}
            startContent={<ArrowLeftIcon className="w-4 h-4" />}
            color="primary"
            radius="none"
            className="shadow-md rounded-md px-6 font-light"
            size="sm"
        >
            Back
        </Button>
    )
}

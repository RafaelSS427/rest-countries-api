import { forwardRef } from 'react'
import NextLink from 'next/link'
import Link from 'next/link'

export const CustomLink = forwardRef((props: any, ref) => <Link {...props} ref={ref} as={NextLink} />)
CustomLink.displayName = 'CustomLink'
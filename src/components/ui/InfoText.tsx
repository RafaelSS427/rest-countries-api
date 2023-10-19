import { FC } from 'react'

interface Props {
    title: string;
    text: string;
}

export const InfoText:FC<Props> = ({ title, text }) => {
  return ( 
    <p className="text-xs font-normal">{title}: <span className="text-foreground text-opacity-70">{ text }</span></p>
  )
}
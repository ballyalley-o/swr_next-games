'use client'
import React, { ReactElement, useRef, FC } from 'react'
import { useFetch } from '@/api/swr'

interface Props {
  title: string
  description: string
}

export const Page: FC<Props> = ({ title, description }): ReactElement => {
  const { data, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {data && <div>{data[0].title}</div>}
      {error && <div>error</div>}
    </>
  )
}

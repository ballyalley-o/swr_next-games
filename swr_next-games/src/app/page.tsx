'use client'
import React, { ReactElement, useRef, FC } from 'react'
import { useFetch } from '@/api/swr'
import App from '@/app/pages/_app'

interface Props {
  title: string
  description: string
}

export default function Home({
  title,
  description,
}: Props): ReactElement<Props> {
  return (
    <main className=' flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-xl'>
      <div className='container mx-auto'>
        <h1 className='text-xl font-bold'>
          <App />
        </h1>
      </div>
    </main>
  )
}

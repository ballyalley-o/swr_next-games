import React from 'react'
import HelloBaby from './hello'
import useSWR from 'swr'

export default function App() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    async (url) => {
      const res = await fetch(url)
      const data = await res.json()
      return data
    }
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

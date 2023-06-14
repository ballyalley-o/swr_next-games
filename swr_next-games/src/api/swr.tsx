import useSWR from 'swr'

export const useFetch = (url: string) => {
  const { data, error, mutate } = useSWR(url, async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  })

  return (
    <>
      {data && <div>{data[0].title}</div>}
      {error && <div>error</div>}
    </>
  )
}

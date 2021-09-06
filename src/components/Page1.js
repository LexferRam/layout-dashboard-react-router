import React from 'react'
import Backdrop from './BackDrop'
import useSWR, { trigger, mutate } from 'swr'
import useFetch from 'hooks/useFetch'

const Page1 = () => {
  // const { data, error } = useSWR('/posts')

  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  if (error) return <div>failed to load</div>
  if (loading) return <Backdrop open />

  return (
    <div>
      POST TITLES:{' '}
      <ul>
        {data?.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page1

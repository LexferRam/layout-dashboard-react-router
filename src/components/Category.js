import React from 'react'
import Backdrop from './BackDrop'
import useSWR from 'swr'

const Category = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/albums',
    fetcher
  )

  if (error) return <div>failed to load</div>
  if (!data) return <Backdrop open />

  return (
    <div>
      CATEGORIES:{' '}
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Category

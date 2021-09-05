import React from 'react'
import Backdrop from './BackDrop'
import useSWR from 'swr'

const Page3 = () => {
  const { data, error } = useSWR('/users')

  if (error) return <div>failed to load</div>
  if (!data) return <Backdrop open />

  return (
    <div>
      USERS:{' '}
      <ul>
        {data?.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page3

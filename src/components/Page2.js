import React from 'react'
import Backdrop from './BackDrop'
import useSWR from 'swr'

const Page2 = () => {
  const { data, error } = useSWR('/comments')

  if (error) return <div>failed to load</div>
  if (!data) return <Backdrop open />

  return (
    <div>
      COMMENTS:{' '}
      <ul>
        {data?.map((item, i) => (
          <li key={i}>{item.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page2

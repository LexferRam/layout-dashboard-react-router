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

//EJEMPLO PARA ACTUALIZAR DATA(usando axios.post()) INMEDIATAMENTE CON SWR/MUTATE/TRIGGER

//mutate('url',[...data,values], false) muta la cache luego va al servidor y actualiza a cache
//await axios.post('url', values)
//trigger('url') desencadena un llamado a un api para actualizar data luego de otro llamado

///////////////////////////////////////////////////////////////
//EJEMPLO PARA BORRAR DATA (usando axios.delete()) INMEDIATAMENTE CON SWR/MUTATE/TRIGGER

//mutate('url',data.filter(el => el.id !== roww.id), false) muta la cache luego va al servidor y actualiza a cache
//await axios.delete('url'+row.id)
//trigger('url') desencadena un llamado a un api para actualizar data luego de otro llamado

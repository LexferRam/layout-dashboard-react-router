import React, { useContext } from 'react'
import useAuth from 'auth/useAuth'
import { useHistory } from 'react-router-dom'
import playAlert from 'alert-sound-notify'
import useWarningAlert from 'hooks/useWarningAlert'

const Login = () => {
  const auth = useAuth()
  const history = useHistory()
  const { setOpen, setMessage } = useWarningAlert()

  //bottle
  // glass
  // funk
  // morse
  // purr
  // tink
  // submarine

  return (
    <>
      <button
        onClick={() => {
          auth.login()
          history.push('/dashboard')
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          playAlert('glass')
          setMessage('Nueva solicitiud recibida!')
          setOpen(true)
        }}
      >
        play notification
      </button>
    </>
  )
}

export default Login

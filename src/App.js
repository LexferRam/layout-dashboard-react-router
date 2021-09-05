import AuthProvider from 'auth/AuthProvider'
import React from 'react'
import AppRouter from './router/AppRouter'


const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}


export default App

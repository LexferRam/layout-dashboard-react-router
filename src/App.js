import AuthProvider from 'auth/AuthProvider'
import React from 'react'
import AppRouter from './router/AppRouter'
import axios from 'axios'
import { SWRConfig } from 'swr'
import WarningAlertProvider from 'context/WarningAlertProvider'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const App = () => {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 10000,
        // dedupingInterval: 5000,
        //(dedupingInterval)si se hace el mismo llamado varias veces al mismo API en un intervalo de 5sg
        //entonces swr solo hara el llamado una vez
        fetcher: (...args) => axios(...args).then((res) => res.data),
      }}
    >
      <WarningAlertProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </WarningAlertProvider>
    </SWRConfig>
  )
}

export default App

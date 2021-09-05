import React, { createContext, useContext, useState } from 'react'

export const WarningAlertContext = createContext()

const WarningAlertProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <WarningAlertContext.Provider
      value={{ open, setOpen, message, setMessage }}
    >
      {children}
    </WarningAlertContext.Provider>
  )
}

export default WarningAlertProvider

import { useContext } from 'react'
import { WarningAlertContext } from 'context/WarningAlertProvider'

const useWarningAlert = () => {
  const valores = useContext(WarningAlertContext)
  return valores
}

export default useWarningAlert

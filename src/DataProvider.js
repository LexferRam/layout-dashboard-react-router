import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

export const DataContext = createContext()


const DataProvider = ({ children }) => {
    const initalState = { count: 0, dataJSON: [] }

    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
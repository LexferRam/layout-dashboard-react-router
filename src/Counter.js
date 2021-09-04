import { useContext } from 'react'
import {DataContext} from './DataProvider'
import axios from 'axios'

export default function Counter() {
    const {state, dispatch} = useContext(DataContext)
    return (
        <>
            Count: {state.count}
            <button
                onClick={() => dispatch({ type: 'reset', payload: { dataJSON:state.dataJSON} })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={async() =>{
                
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
                dispatch({ type: 'buscar', payload:{count: state.count, dataJSON:data} })

            } }>buscar</button>

            <div>
                {state.dataJSON?.map((item, i ) => (
                    <p key={i}>{item.title}</p>
                ))}
            </div>

        </>
    );
}


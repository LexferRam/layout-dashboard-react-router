import React from 'react'
import useAuth from 'auth/useAuth';
import { useHistory } from 'react-router-dom';


const Login = () => {

    const auth = useAuth();
    const history = useHistory()

    return (
        <button onClick={() =>{
            auth.login()
            history.push("/dashboard")
        }}>
            Login
        </button>
    )
}

export default Login

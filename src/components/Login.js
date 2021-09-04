import React from 'react'


const Login = ({history}) => {
    return (
        <button onClick={() => history.push("/dashboard")}>
            Login
        </button>
    )
}

export default Login

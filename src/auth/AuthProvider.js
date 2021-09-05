import {createContext,useState, useEffect} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || null
    )

    const dataContext = {
        user,
        login(){
            setUser({id:1, name:'Lexfer'})
        },
        logout(){
            setUser(null)
        },
        isLogged(){
            return !!user
        }
    }

    useEffect(() => {
        try {
            sessionStorage.setItem("user", JSON.stringify(user))
        } catch (error) {
            sessionStorage.removeItem("user")
            console.log(error)
        }
    },[user])

    return(
            <AuthContext.Provider value={dataContext}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
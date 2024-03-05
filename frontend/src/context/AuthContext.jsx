import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
    // set LocalStorage
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem(`chatUser`)) || null)
  return (
    <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

//65e46c987be12a98acf3cb93 friend
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
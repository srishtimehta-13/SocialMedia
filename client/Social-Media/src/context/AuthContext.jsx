import { createContext, useEffect,useState,useContext } from "react";
import { axiosInstance } from "../axiosCalls/axios";

const AuthContext = createContext()



export const AuthProvider = ({children})=>{
    const[user,setUser] = useState(null)


    useEffect(()=>{
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get("/users/me");

                setUser(response.data.authenticatedUser);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser()
    },[])

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext)

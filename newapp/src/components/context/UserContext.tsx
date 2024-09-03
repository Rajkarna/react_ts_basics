import { createContext, useState } from "react"

type UserContextProviderProps = {
   children:React.ReactNode
}

type Authuser = {
   name:string;
   email:string
}

type ContextProps = {
   user:Authuser | null;
   setUser:React.Dispatch<React.SetStateAction<Authuser | null>> 
}

export const UserContext = createContext<ContextProps | null>(null)



export const UserContextProvider = ({children}:UserContextProviderProps) => {
   const [user, setUser] =  useState<Authuser | null>(null)

   return(
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
   )
}
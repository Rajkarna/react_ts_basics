import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const User1 = () => {

  const usercontext = useContext(UserContext)

    const handleLogin = () => {
        usercontext?.setUser({
          name:"raj",
          email:"raj@gmail.com"
        })
    }

    const handleLogout = () => {
        usercontext?.setUser({
          name:"",
          email:""
        })
    }
  return (
    <div>
        <button onClick={() => handleLogin()}>login</button>
        <button onClick={() => handleLogout()}>logout</button>
        <h1>{usercontext?.user?.name}</h1>
        <h1>{usercontext?.user?.email}</h1>
    </div>
  )
}

export default User1
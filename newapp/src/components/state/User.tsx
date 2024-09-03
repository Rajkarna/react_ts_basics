import React, { useState } from 'react'

type Authuser = {
    name:string;
    email:string
}

const User = () => {
    const [user, setUser] = useState<Authuser | null>(null)

    const handlelogin = () => {
        setUser({
            name:"raj",
            email:"raj@gmail.com"
        })
        
    }

    const handlelogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handlelogin}>login</button>
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>
        <button onClick={handlelogout}>logout</button>
    </div>
  )
}

export default User
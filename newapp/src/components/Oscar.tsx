import React from 'react'

type OscarProps = {
    children:React.ReactNode
}

const Oscar = (props:OscarProps) => {
  return (
    <div>The oscar goes to <span style={{display:"inline"}}>{props.children}</span> </div>
  )
}

export default Oscar
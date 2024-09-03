import React from 'react'
import { Name } from './PersonObj'

type PersonListProps = {
    newList:Name[]
}

const PersonList = (props:PersonListProps) => {
  return (
    <>
        {props.newList.map(name => <h2 key={name.first}>{name.first}</h2>)}
    </>
  )
}

export default PersonList
import React from 'react'
import { PersonObjProps } from './Person.types'

export type Name = {

  first: string
  last: string

}


const PersonObj = (props: PersonObjProps) => {
  return (
    <div>{props.names.last}</div>
  )
}

export default PersonObj
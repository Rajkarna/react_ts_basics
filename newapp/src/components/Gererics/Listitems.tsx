import React from 'react'

type ListitemsProps<T> = {
    items:T[];
    onClick: (value : T) => void
}

const Listitems = <T,>({items, onClick}:ListitemsProps<T>) => {
  return (
    <div>
        {items.map((item) => <button onClick={() => onClick(item)}>{item}</button>)}
    </div>
  )
}

export default Listitems
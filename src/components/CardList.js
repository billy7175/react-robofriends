import React from 'react'
import Card from './Card'

export default function CardList(props) {
  return (
    <div>
      {props.data && props.data.map((card, i) => {
        return <Card key={card.id} name={card.name} id={card.id} email={card.email} />
        // return <div>{card.name}</div>
      })}

    </div>
  )
}

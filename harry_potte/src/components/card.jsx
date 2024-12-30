import React from 'react'

function Card({item}) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>types: {item.types}</p>
      <img src={item.image} />
    </div>
  )
}

export default Card
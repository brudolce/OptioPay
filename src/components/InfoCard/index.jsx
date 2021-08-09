import React from 'react'
import './InfoCard.css'

const InfoCard = ({ value }) => {
  return (
    <div className="infoCardContainer">
      <div className="infoCardValue">{value}</div>
    </div>
  )
}

export default InfoCard

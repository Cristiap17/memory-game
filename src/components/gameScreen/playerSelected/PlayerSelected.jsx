import React  from 'react'
import './PlayerSelected.css'

export default function PlayerSelected({ value, isTurn, points }) {

  return (
    <div className={!isTurn ? `main-container` : 'main-container-turn'}>
        <div className={!isTurn ? '' : 'cone'}></div>
        <span>Player {value}</span>
        <span>{points}</span>
    </div>
  )
}

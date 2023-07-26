import React, { useContext } from 'react'
import './ModalWinner.css'
import { MemoryContext } from '../../../context/MemoryAppProvider'

export default function ModalWinner({ showClassModal, handleNewGame, winner, renderPlayers, move }) {

  const { second } = useContext(MemoryContext)
  const minutes = Math.floor(second / 60)
  const formatSeconds = second % 60

  return (
    <div className={showClassModal ? 'main-container-modal' : 'inactive'}>
      {
        !renderPlayers
          ? <div className='modal-container'>
            <section>
              <h2 className='h2-modal'>¡Felicitaciones por completar el juego!</h2>
              <h3 className='h3-modal'>Tiempo Total: {`${minutes}:${formatSeconds < 10 ? '0' : ''}${formatSeconds}`} minutos.</h3>
              <h3 className='h3-modal'>Movimientos Totales: {move} </h3>
              <button onClick={handleNewGame} className='new-gameButton-modal'>New Game</button>
            </section>
          </div>
          : <div className='modal-container'>
            <section>
              <h2 className='h2-modal'>¡Felicitaciones por completar el juego!</h2>
              <h3 className='h3-modal'>Ganador(es): {winner.map(player => `Player ${player.value}, `)} </h3>
              <button onClick={handleNewGame} className='new-gameButton-modal'>New Game</button>
            </section>
          </div>
      }
    </div>
  )
}

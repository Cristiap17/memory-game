import React, { useContext, useEffect, useState } from 'react'
import './GameScreen.css'
import ButtonGame from './buttonGame/ButtonGame';
import Timer from './timer/Timer';
import { MemoryContext } from '../../context/MemoryAppProvider';
import PlayerSelected from './playerSelected/PlayerSelected';
import ModalWinner from './modal/ModalWinner';

export default function GameScreen() {

    const {
        classBoard,
        renderItems,
        flippedCheckedPair,
        handleRestartBoard,
        turn,
        setTurn,
        flippedInvalidPair,
        pairCards,
        setPairCards,
        numberPlayersSelected,
        renderPlayers,
        setRenderPlayers,
        renderTimer,
        setRenderTimer,
        playerTurn,
        playerPoints,
        showclassScreens, setShowClassScreens,
        showClassModal, setShowClassModal,
        setSecond,
        pauseTime, setPauseTime
    } = useContext(MemoryContext)

    const [move, setMove] = useState(0)
    const [classActive, setClassActive] = useState('')
    const [count, setCount] = useState(2)
    const [pairCheckedCount, setPairCheckedCount] = useState(0)
    const [winner, setWinner] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const flipItem = () => {
        setMove(move + 1)
        setClassActive('flipped')
        setTurn(turn + 1)
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const validationPair = () => {
        if (pairCards[0] === pairCards[1]) {
            flippedCheckedPair(pairCards[0])
            setPairCards([])
            setTurn(0)
            playerPoints(true)
            setPairCheckedCount(pairCheckedCount + 1)

            return
        }
        if (count >= numberPlayersSelected.length) {
            setCount(1)
        } else {
            setCount(count + 1)
        }
        playerTurn(count)
        setPairCards([])
        setTurn(0)
        setClassActive('')
        flippedInvalidPair()
    }

    const handleNewGame = () => {
        setSecond(0)
        setMove(0)
        setRenderTimer(!renderTimer)
        setShowClassScreens(true)
        setCount(2)
        setRenderPlayers(false)
        setShowClassModal(false)
        setPairCheckedCount(0)
    }

    useEffect(() => {
        if (turn === 2) {
            setTimeout(() => {
                validationPair()
            }, 1000)
        }
    }, [turn])

    useEffect(() => {
        if (pairCheckedCount === renderItems.length / 2 && renderItems.length !== 0) {
            setShowClassModal(!showClassModal)
            playerWinner(numberPlayersSelected)
            setPauseTime(!pauseTime)
        }
    }, [pairCheckedCount])

    const playerWinner = (arrayPlayers) => {
        let winnerPoints = 0
        arrayPlayers.map((player) => {
            if (player.points > winnerPoints) {
                winnerPoints = player.points
            }
        })
        setWinner(arrayPlayers.filter(player => player.points === winnerPoints))
    }

    return (
        <div className={showclassScreens ? 'inactive' : 'game-container'} >
            <header>
                <nav className='nav-container'>
                    <h2 className={classBoard.h2Class}>memory</h2>
                    <div className='nav-buttons'>
                        <button onClick={() => {
                            handleRestartBoard()
                            setMove(0)
                            setCount(2)
                            setPairCheckedCount(0)
                        }}> Restart </button>
                        <button onClick={handleNewGame}>New Game</button>
                    </div>
                    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
                        <button className={'menu-button'} onClick={toggleMenu}>Menú</button>
                        <div className="submenu">
                            <button onClick={() => {
                                handleRestartBoard()
                                setMove(0)
                                setCount(2)
                                setPairCheckedCount(0)
                                setIsOpen(!isOpen)
                            }}> Restart </button>
                            <button onClick={() => {
                                handleNewGame()
                                setIsOpen(!isOpen)
                            }}>New Game</button>
                        </div>
                    </div>
                </nav>
            </header>
            <main className='board-container'>
                <section className={classBoard.boardClass}>
                    {
                        renderItems.map((item, index) => {
                            return (
                                <ButtonGame
                                    flipItem={flipItem}
                                    classActive={classActive}
                                    isSelected={item.isSelected}
                                    checkPair={item.checkPair}
                                    key={index}
                                    value={item.value}
                                    index={index}
                                />
                            )
                        })
                    }
                </section>
            </main>
            <footer className='footer-container'>
                {
                    !renderPlayers ?
                        <section className='section-container'>
                            <div>
                                <span>Time</span>
                                {renderTimer ? <Timer /> : ''}
                            </div>
                            <div className='movements-container'>
                                <span>Moves</span>
                                <span>{move}</span>
                            </div>
                        </section>
                        :
                        <section className='players-container'>
                            {
                                numberPlayersSelected.map((item) => {
                                    return (
                                        <PlayerSelected
                                            value={item.value}
                                            isTurn={item.isTurn}
                                            points={item.points}
                                            key={item.value}
                                        />
                                    )
                                })
                            }
                        </section>
                }
            </footer>
            <ModalWinner
                showClassModal={showClassModal}
                handleNewGame={handleNewGame}
                winner={winner}
                move={move}
                renderPlayers={renderPlayers}
            />
        </div>
    )
}

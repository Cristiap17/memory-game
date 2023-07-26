import React, { useContext, useState } from 'react'
import { MemoryContext } from '../../context/MemoryAppProvider'
import './ConfigurationScreen.css'
import OptionsModule from './optionsModule/OptionsModule'
import {
    twoPlayers, 
    threePlayers, 
    fourPlayers, 
    arrayOne, 
    arrayTwo, 
    arrayThree, 
    arrayFour,
    } from '../../helpers/arraysRender' 

export default function ConfigurationScreen(){

    const { classBoard, 
            setClassBoard, 
            setButtonsActive,
            shuffle,
            setRenderTimer,
            setNumberPlayersSelected,
            setRenderPlayers,
            showclassScreens, setShowClassScreens,
            pauseTime, setPauseTime
        } = useContext(MemoryContext)

    const [buttonsTest, setButtonsTest] = useState({
        theme: [
            {name: 'Number', active: true},
            {name: 'Icon', active: false}
        ],
        numberPlayers:[
            {name: '1', active: true},
            {name: '2', active: false},
            {name: '3', active: false},
            {name: '4', active: false}
        ], 
        grid:[
            {name: '4X4', active: true}, 
            {name: '6X6', active: false}
        ]
    })


    const buttonSelected = Object.values(buttonsTest).flat().filter((item) => item.active === true )

    const handleSubmit = () =>{
        setPauseTime(true)
        setShowClassScreens(!showclassScreens)
        setButtonsActive(buttonSelected)
        setRenderTimer(true)

        if (buttonSelected[1].name == 2) {
            setNumberPlayersSelected(twoPlayers)
            setRenderPlayers(true)
        }
        if (buttonSelected[1].name == 3) {
            setNumberPlayersSelected(threePlayers)
            setRenderPlayers(true)
        }
        if (buttonSelected[1].name == 4) {
            setNumberPlayersSelected(fourPlayers)
            setRenderPlayers(true)
        }

        if (buttonSelected[0].name === 'Number' && buttonSelected[2].name === '4X4') {
            shuffle(arrayOne)
            setClassBoard(
                {
                    ...classBoard, 
                    h2Class: 'nav-title-class',
                    boardClass: 'board',
                    itemBoardClass: 'item-board',
                    svgClass: 'svg-style'
                }
            )
            return
        }
        if (buttonSelected[0].name === 'Number' && buttonSelected[2].name === '6X6') {
            shuffle(arrayTwo)
            setClassBoard(
                {
                    ...classBoard, 
                    h2Class: 'nav-title-class-6x6',
                    boardClass: 'board-6x6',
                    itemBoardClass: 'item-board-6x6',
                    svgClass: 'svg-style-6x6'
                }
            )
            return
        }
        if (buttonSelected[0].name === 'Icon' && buttonSelected[2].name === '4X4') {
            shuffle(arrayThree)
            setClassBoard(
                {
                    ...classBoard, 
                    h2Class: 'nav-title-class',
                    boardClass: 'board',
                    itemBoardClass: 'item-board',
                    svgClass: 'svg-style',
                }
            )
            return
        }
        if (buttonSelected[0].name === 'Icon' && buttonSelected[2].name === '6X6') {
            shuffle(arrayFour)
            setClassBoard(
                {
                    ...classBoard, 
                    h2Class: 'nav-title-class-6x6',
                    boardClass: 'board-6x6',
                    itemBoardClass: 'item-board-6x6',
                    svgClass: 'svg-style-6x6',
                }
            )
            return
        } 
    }

    return (
        <>
        <div className= {showclassScreens ? 'configuration-screen-style' : 'inactive'}>
            <header>
                <h1>memory game</h1>
            </header>
            <main className='main-style'>
                <div className='content-style'>
                    <OptionsModule
                        optionsName={'Selec Theme'}
                        buttonsTest={buttonsTest.theme}
                        setButtonsTest={setButtonsTest}
                        typeButton={'theme'}
                    />
                    <OptionsModule
                        optionsName={'Number of Players'}
                        buttonsTest={buttonsTest.numberPlayers}
                        setButtonsTest={setButtonsTest}
                        typeButton={'numberPlayers'}
                    />
                    <OptionsModule
                        optionsName={'Grid Size'}
                        buttonsTest={buttonsTest.grid}
                        setButtonsTest={setButtonsTest}
                        typeButton={'grid'}
                    />
                    <div className='submit-button-style' >
                        <button
                            onClick={handleSubmit}
                            type="submit"
                        >
                            start game
                        </button>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

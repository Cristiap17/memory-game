import React, { createContext, useState } from 'react'

export const MemoryContext = createContext({})

export const MemoryAppProvider = ({children}) => {

    const [buttonsActive, setButtonsActive] = useState([])
    const [classBoard, setClassBoard] = useState({
      h2Class: 'nav-title-class',
      boardClass: 'board',
      itemBoardClass: 'item-board',
      svgClass: 'svg-style',
    })
    const [renderItems, setRenderItems] = useState([])
    const [pairCards, setPairCards] = useState([])
    const [turn, setTurn] = useState(0)
    const [second, setSecond] = useState(0)
    const [pauseTime, setPauseTime] = useState(false)
    const [changeClassSelected, setChangeClassSelected] = useState(false)
    const [renderPlayers, setRenderPlayers] = useState(false)
    const [numberPlayersSelected , setNumberPlayersSelected] = useState([])
    const [renderTimer, setRenderTimer] = useState(false)
    const [pointsPlayers, setPoinstPlayers] = useState (0)
    const [showclassScreens, setShowClassScreens] = useState(true)
    const [showClassModal, setShowClassModal] = useState(false)
    const [playersPoints, setPlayersPoints] = useState([])



    const boardCards = (arrayCards) =>{
        const arrayCardsMapped = arrayCards.map((card)=>({
          ...card, 
          isSelected: false,
          checkPair: false,
        }))
        setRenderItems([...arrayCardsMapped])
    }

    const activeSelectedCard = (cardIndex) =>{
        const cardsSelected = renderItems.map((item, index)=>{
          if (index === cardIndex) {
            return {
              ...item,
              isSelected: true
            }
          }
          return item
        })
        setRenderItems(cardsSelected)
    }

    const flippedInvalidPair = () =>{
      const cardsSelected = renderItems.map((item)=>{
        return {
         ...item,
         isSelected: false 
        }
      })
      setRenderItems(cardsSelected)
    }

    const flippedCheckedPair = (value) =>{
      const cardsSelected = renderItems.map((item)=>{
        if (value === item.value) { 
          return {
           ...item,
           isSelected: false,
           checkPair: true ,
          }
        }
        return item
      })
      setRenderItems(cardsSelected)
    }

    const playerTurn = (value) =>{
      const playerSelected = numberPlayersSelected.map((item)=>{
        if (value === item.value) {
          return{
            ...item,
            isTurn: true,
          }
        }
        return {
          ...item,
          isTurn: false
        }
      })
      setNumberPlayersSelected(playerSelected)
    }

    const playerPoints = (value) =>{
      const playerSelected = numberPlayersSelected.map((item)=>{
        if (value === item.isTurn) {
          return{
            ...item,
            points: item.points + 1
          }
        }
        return {
          ...item,
        }
      })
      setNumberPlayersSelected(playerSelected)
    }

    const collectPair = (value) =>{
      setPairCards([...pairCards, value])
    }

    const restartPoints = () =>{
      const playersSelected = numberPlayersSelected.map((item)=>{
        return {
          ...item,
          points: item.points = 0
        }
      })
      setPlayersPoints(playersSelected)
    }

    const handleRestartBoard = () =>{
      const cardsSelected = renderItems.map((item)=>{
        return {
          ...item,
          isSelected: false,
          checkPair: false
        }
      })
      restartPoints()
      shuffle(cardsSelected)
      setSecond(0)
      playerTurn(1)
    }

    const shuffle=(array)=>{
      let current = array.length, temp, random
        
      while (current > 0){
          random = Math.floor(Math.random() * current)
          current--
  
          temp = array[current]
          array[current] = array[random]
          array[random] = temp
      }
      boardCards(array) 
  } 

  return (
    <MemoryContext.Provider value={
      {handleRestartBoard,
        buttonsActive, setButtonsActive,
        classBoard,
        setClassBoard,
        renderItems, 
        setRenderItems,
        pairCards, setPairCards,
        collectPair,
        turn,
        setTurn,boardCards, activeSelectedCard,flippedInvalidPair,
        changeClassSelected, setChangeClassSelected,
        flippedCheckedPair, shuffle,
        second, setSecond,
        pauseTime, setPauseTime,
        renderTimer, setRenderTimer,
        numberPlayersSelected , setNumberPlayersSelected,
        renderPlayers, setRenderPlayers
        ,playerTurn,
        pointsPlayers, setPoinstPlayers, playerPoints,
        showclassScreens, setShowClassScreens,
        showClassModal, setShowClassModal 
      }
      }>
        {children}
    </MemoryContext.Provider>
  )
}

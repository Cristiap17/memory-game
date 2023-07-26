import React, { useContext, useState } from 'react'
import svgStandar from '../../../assets/svg/synapse-2-svgrepo-com.svg'
import { MemoryContext } from '../../../context/MemoryAppProvider'
import './ButtonGame.css'

export default function ButtonGame({ flipItem, index, value, isSelected, checkPair}) {

    const {classBoard, buttonsActive, collectPair, activeSelectedCard} = useContext(MemoryContext)

    return (
        <span
        onClick={()=>{flipItem()
                collectPair(value)
                activeSelectedCard(index)
            }}
            id={index}
            className={`${classBoard.itemBoardClass} ${!isSelected ? '' :'flipped'} ${checkPair? 'selected' : ''} `}
        >
            {buttonsActive[0].name === 'Number' ? 
            (!isSelected && !checkPair ? <img className={classBoard.svgClass} src={svgStandar}/> : <strong>{value}</strong>)
            :(!isSelected && !checkPair ? <img className={classBoard.svgClass} src={svgStandar}/> : <img className={classBoard.svgClass} src={value}/>)
        }
        </span>
    )
}

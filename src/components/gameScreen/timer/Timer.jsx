import React, { useContext, useEffect, useState } from 'react'
import { MemoryContext } from '../../../context/MemoryAppProvider'

export default function Timer() {

    const { second, setSecond, pauseTime } = useContext(MemoryContext)

    useEffect(() => {
        let timer
        if (second === second) {
            timer = setTimeout(() => setSecond(second + 1), 1000)
        }
        return () => clearTimeout(timer)
    }, [pauseTime ? second : ''])

    const minutes = Math.floor(second / 60)
    const formatSeconds = second % 60

    return (
            <span>{`${minutes}:${formatSeconds < 10 ? '0' : ''}${formatSeconds}`}</span>
    )
}

import React, { useEffect, useRef, useState } from 'react'
import { Row } from 'react-bootstrap'

const TimerAnswer = ({ duration, handelTime }) => {
    const [time, setTime] = useState(0)
    const [loadedPrograss, setLoadedPrograss] = useState(0)
    const timer = useRef(null)
    useEffect(() => {
        timer.current = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 1000)
        return () => clearInterval(timer.current)
    });

    useEffect(() => {
        setLoadedPrograss(100 * (time / duration))
        if (time === duration) {
            clearInterval(timer.current)
            setTimeout(() => {
                handelTime()
            }, 1000)
        }

    }, [time]);

    return (
        <div className='p-0 m-0 timer-box'>
            <div style={{
                width: `${loadedPrograss}%`,
                backgroundColor:
                    `${loadedPrograss < 50 ? " lightgreen" : loadedPrograss < 70 ? "#fff000" : "red"
                    }`
            }} className='timer-progress m-0 p-0'></div>
        </div >
    )
}

export default TimerAnswer
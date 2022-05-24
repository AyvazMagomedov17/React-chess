import { time } from "console"
import { useEffect, useRef, useState } from "react"
import { Colors } from "../models/Colors"
import { Player } from "../models/Player"

type Props = {
    currentPlayer: Player | null
    restartGame: () => void
    isFirstMoveMade: boolean
    setIsFirstMoveMade: React.Dispatch<React.SetStateAction<boolean>>
    setIsBlackPlayerWon: React.Dispatch<React.SetStateAction<boolean>>
    setIsWhitePlayerWon: React.Dispatch<React.SetStateAction<boolean>>

}

const Timer = ({ setIsBlackPlayerWon, setIsWhitePlayerWon, setIsFirstMoveMade, isFirstMoveMade, restartGame, currentPlayer }: Props) => {
    const [blackTimer, setBlackTimer] = useState(300)
    const [whiteTimer, setWhiteTimer] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)
    const restart = () => {
        setBlackTimer(300)
        setWhiteTimer(300)

        if (timer.current)
            clearInterval(timer.current)
        restartGame()
        setIsFirstMoveMade(false)

    }
    useEffect(() => {
        if (isFirstMoveMade)

            startTimer()
    }, [currentPlayer, isFirstMoveMade])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }

        const decrement = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer

        timer.current = setInterval(decrement, 1000)

    }
    useEffect(() => {
        if (blackTimer === 0) {
            restart()
            setIsWhitePlayerWon(true)
        }
        if (whiteTimer === 0) {
            restart()
            setIsBlackPlayerWon(true)
        }
    }, [blackTimer, whiteTimer])
    function decrementBlackTimer() {

        setBlackTimer(prev => prev - 1)
    }
    function decrementWhiteTimer() {
        setWhiteTimer(prev => prev - 1)
    }
    return (
        <div>
            <div className="">Белый таймер {whiteTimer}</div>
            <div>Черный таймер {blackTimer}</div>
            <button onClick={restart}>Restart game</button>
        </div>
    )
}

export default Timer
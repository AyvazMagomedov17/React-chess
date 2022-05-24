import { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent';
import WinPopup from './components/WinPopup';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';
import s from './styles/app.module.css'
function App() {
    const [board, setBoard] = useState(new Board())
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [currentPlayer, setcurrentPlayer] = useState<Player | null>(null)
    const [isFirstMoveMade, setIsFirstMoveMade] = useState(false)
    const [isWhitePlayerWon, setIsWhitePlayerWon] = useState(true)
    const [isBlackPlayerWon, setIsBlackPlayerWon] = useState(false)
    const restartGame = () => {
        const newBoard = new Board()
        newBoard.createCells()
        newBoard.addFigure()
        setcurrentPlayer(whitePlayer)
        setBoard(newBoard)
    }
    function swapPlayer() {
        if (currentPlayer?.color === Colors.WHITE) {
            setIsFirstMoveMade(true)
        }
        setcurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }
    useEffect(() => {
        restartGame()
        setcurrentPlayer(whitePlayer)
    }, [])
    return (
        <div className={s.app}>
            <BoardComponent setIsBlackPlayerWon={setIsBlackPlayerWon} setIsWhitePlayerWon={setIsWhitePlayerWon} setIsFirstMoveMade={setIsFirstMoveMade} isFirstMoveMade={isFirstMoveMade} restartGame={restartGame} swapPlayer={swapPlayer} currentPlayer={currentPlayer} board={board} setBoard={setBoard} />
            {isBlackPlayerWon && <WinPopup player='черный' setIsPlayerWon={setIsBlackPlayerWon} />}
            {isWhitePlayerWon && <WinPopup player='белый' setIsPlayerWon={setIsWhitePlayerWon} />}
        </div>
    );
}

export default App;

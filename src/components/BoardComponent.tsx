import s from '../styles/board.module.css'
import CellComponent from './CellComponent'
import { Board } from '../models/Board'
import { Fragment, useEffect, useState } from 'react'
import { Colors } from '../models/Colors'
import { Cell } from '../models/Cell'
import { Player } from '../models/Player'
import LostFigures from './LostFigures'
import Timer from './Timer'
type Props = {
    board: Board,
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
    restartGame: () => void
    setIsFirstMoveMade: React.Dispatch<React.SetStateAction<boolean>>
    isFirstMoveMade: boolean
    setIsBlackPlayerWon: React.Dispatch<React.SetStateAction<boolean>>
    setIsWhitePlayerWon: React.Dispatch<React.SetStateAction<boolean>>
}

const BoardComponent = ({ setIsBlackPlayerWon, setIsWhitePlayerWon, setIsFirstMoveMade, isFirstMoveMade, restartGame, currentPlayer, swapPlayer, board, setBoard }: Props) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    function clickOnSell(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
        } else {
            if (cell.figure?.color === currentPlayer?.color) setSelectedCell(cell)

        }

    }
    function showAvailableCells() {
        board.showAvailableCells(selectedCell)
        updateBoard()
    }
    useEffect(() => {
        showAvailableCells()
    }, [selectedCell])
    function updateBoard() {
        const newBord = board.getNewBoard()
        setBoard(newBord)
    }
    return (
        <div className={s.boardComponent}>
            <Timer setIsWhitePlayerWon={setIsWhitePlayerWon} setIsBlackPlayerWon={setIsBlackPlayerWon} isFirstMoveMade={isFirstMoveMade} setIsFirstMoveMade={setIsFirstMoveMade} restartGame={restartGame} currentPlayer={currentPlayer} />
            <div className={s.board}>
                {board.cells.map((row, index) => {

                    return <Fragment key={index}>
                        {row.map(cell => {

                            if (cell.color === Colors.WHITE) {
                                return <CellComponent clickOnSell={clickOnSell} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} key={cell.id} cell={cell}></CellComponent>
                            }
                            if (cell.color === Colors.BLACK) {
                                return <CellComponent clickOnSell={clickOnSell} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} key={cell.id} cell={cell}></CellComponent>
                            }

                        }
                        )}
                    </Fragment>
                })}
            </div>
            <div className={s.lostFigures}>
                <LostFigures title='Белые фигуры' arrayOfFigures={board.lostWhiteFigures} />
                <LostFigures title='Черные фигуры' arrayOfFigures={board.lostBlackFigures} />
            </div>
        </div>

    )
}

export default BoardComponent
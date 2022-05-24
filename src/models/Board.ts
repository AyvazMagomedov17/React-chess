import { Figure } from './figures/Figure';
import { Rook } from './figures/Rook';
import { Bishop } from './figures/Bishop';
import { King } from './figures/King';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Colors } from './Colors';
import { Cell } from './Cell';
import { Knight } from './figures/Knight';
export class Board {
    cells: Cell[][] = []
    lostWhiteFigures: Figure[] = []
    lostBlackFigures: Figure[] = []
    public createCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 == 0) {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) // белый цвет
                } else {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) // черный цвет
                }

            }
            this.cells.push(row)
        }
    }
    public showAvailableCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.isAvailable = !!selectedCell?.figure?.canMove(target)

            }

        }
    }

    public getNewBoard(): Board {
        const newBord = new Board()
        newBord.cells = this.cells
        newBord.lostBlackFigures = this.lostBlackFigures
        newBord.lostWhiteFigures = this.lostWhiteFigures
        return newBord

    }
    public addLostFigure(figure: Figure) {

        if (figure.color === Colors.WHITE) {
            this.lostWhiteFigures.push(figure)
        } else {
            this.lostBlackFigures.push(figure)
        }
    }
    private addKings() {
        new King(Colors.BLACK, this.getCell(4, 0))
        new King(Colors.WHITE, this.getCell(4, 7))
    }
    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i, 1))
            new Pawn(Colors.WHITE, this.getCell(i, 6))

        }
    }
    private addQueens() {
        new Queen(Colors.BLACK, this.getCell(3, 0))
        new Queen(Colors.WHITE, this.getCell(3, 7))
    }
    private addKnights() {
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.BLACK, this.getCell(6, 0))
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.WHITE, this.getCell(6, 7))
    }
    private addRooks() {
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.BLACK, this.getCell(7, 0))
        new Rook(Colors.WHITE, this.getCell(0, 7))
        new Rook(Colors.WHITE, this.getCell(7, 7))
    }
    private addBishops() {
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.WHITE, this.getCell(5, 7))
    }
    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }
    public addFigure() {
        this.addKings()
        this.addBishops()
        this.addKnights()
        this.addPawns()
        this.addQueens()
        this.addRooks()
    }
}
const clasik = new Board()

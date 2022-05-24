import { Cell } from './../Cell';
import { Colors } from './../Colors';
import logo from '../../assets/figures/black-king.png'

export enum FigureNames {
    FIGURE = 'Фигура',
    KING = 'Король',
    QUEEN = 'Ферзь',
    PAWN = 'Пешка',
    ROOK = 'Ладья',
    KNIGHT = 'Конь',
    BISHOP = 'Слон',
}
export class Figure {
    color: Colors
    logo: typeof logo | undefined
    cell: Cell
    name: FigureNames
    id: number

    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = undefined
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }

    canMove(cell: Cell): boolean {
        if (cell.figure?.color === this.color) {
            return false
        }
        if (cell.figure?.name === FigureNames.KING) {
            return false
        }
        return true

    }
    moveFigure(target: Cell) { }

}
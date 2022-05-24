import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/figures/black-pawn.png'
import whiteLogo from '../../assets/figures/white-pawn.png'

export class Pawn extends Figure {
    isFirstStep: boolean = true
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.PAWN
    }
    canMove(cell: Cell): boolean {
        if (!super.canMove(cell)) {
            return false
        }
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2
        if ((cell.y === this.cell.y + direction || this.isFirstStep && (cell.y === this.cell.y + firstStepDirection)) && cell.x === this.cell.x && this.cell.board.getCell(cell.x, cell.y).isEmpty()) {
            return true
        }

        if (cell.y === this.cell.y + direction && (cell.x === this.cell.x + 1 || cell.x === this.cell.x - 1) && this.cell.isEnemy(cell)) {
            return true
        }
        return false
    }
    moveFigure(target: Cell): void {
        super.moveFigure(target)
        this.isFirstStep = false
    }
}
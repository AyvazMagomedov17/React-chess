import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/figures/black-queen.png'
import whiteLogo from '../../assets/figures/white-queen.png'

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.QUEEN
    }
    canMove(cell: Cell): boolean {
        if (!super.canMove(cell)) {
            return false
        }
        if (this.cell.isEmptyVertical(cell)) {
            return true
        }
        if (this.cell.isEmptyHorizontal(cell)) {
            return true
        }
        if (this.cell.isEmptyDiagonal(cell)) {
            return true
        }
        return false
    }
}
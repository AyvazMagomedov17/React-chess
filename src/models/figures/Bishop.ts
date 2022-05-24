import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/figures/black-bishop.png'
import whiteLogo from '../../assets/figures/white-bishop.png'

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.BISHOP
    }
    canMove(cell: Cell): boolean {
        if (!super.canMove(cell)) {
            return false
        }

        if (this.cell.isEmptyDiagonal(cell)) {
            return true
        }
        return false
    }
}
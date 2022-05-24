import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/figures/black-king.png'
import whiteLogo from '../../assets/figures/white-king.png'
export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }
    canMove(cell: Cell): boolean {
        if (!super.canMove(cell)) {
            return false
        }
        const dx = Math.abs(cell.x - this.cell.x)
        const dy = Math.abs(cell.y - this.cell.y)
        if (dy || dx > 2) {
            return false
        }
        /* if (!this.cell?.board?.getCell(cell.x, cell.y - 1).isEmpty()) {
            return true
        } */
        return true
    }
}
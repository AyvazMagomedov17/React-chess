import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames } from './Figure';
import blackLogo from '../../assets/figures/black-knight.png'
import whiteLogo from '../../assets/figures/white-knight.png'

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KNIGHT
    }
    canMove(cell: Cell): boolean {
        if (!super.canMove(cell)) {
            return false
        }
        const dy = Math.abs(this.cell.y - cell.y)
        const dx = Math.abs(this.cell.x - cell.x)
        return (dx === 1 && dy === 2) || (dy === 1 && dx === 2)
    }
}
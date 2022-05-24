import s from '../styles/cell.module.css'
import cn from 'classnames'
import { Cell } from '../models/Cell'
import { Colors } from '../models/Colors'
type Props = {
    cell: Cell
    selected: boolean
    clickOnSell: (cell: Cell) => void
}

const CellComponent = ({ clickOnSell, selected, cell }: Props) => {
    return (
        <div onClick={() => { clickOnSell(cell) }} className={cn(s.cell, cell.color === Colors.WHITE ? s.white : s.black, selected && s.selected, cell.isAvailable && cell.figure && s.atack)}>

            {!cell.figure && cell.isAvailable && <div className={s.available}></div>}
            {cell.figure?.logo && <img className={s.logo} src={cell.figure.logo} />}
        </div>
    )
}

export default CellComponent
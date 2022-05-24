import { title } from 'process'
import { Figure } from '../models/figures/Figure'
import s from '../styles/lostFigures.module.css'
type Props = {
    title: string,
    arrayOfFigures: Figure[]
}

const LostFigures = ({ title, arrayOfFigures }: Props) => {

    return (
        <div className={s.lostFigures}>
            <div className={s.content}>
                <div className={s.title}>{title}</div>
                <div className={s.body}>
                    <ul className={s.listOfFigures}>
                        {arrayOfFigures?.map(figure => {
                            //@ts-ignore
                            return <li className={s.figure}>
                                <span className={s.figureName}>{figure.name}</span>
                                <img src={figure.logo} alt="figure image" className={s.figureImg} />
                            </li>

                        })}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default LostFigures
import s from '../styles/winPopup.module.css'
type Props = {
    player: string,
    setIsPlayerWon: React.Dispatch<React.SetStateAction<boolean>>

}

const WinPopup = ({ setIsPlayerWon, player }: Props) => {
    const closePopup = () => {
        setIsPlayerWon(false)
    }
    return (
        <div className={s.winPopup}>
            <div className={s.content}>
                <button onClick={closePopup} className={s.closeButton}>✖</button>
                <div className={s.body}>
                    <h3 className={s.title}>
                        Победил {player} игрок
                    </h3>
                    <button onClick={closePopup} className={s.restartButton}>
                        Начать заново
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WinPopup
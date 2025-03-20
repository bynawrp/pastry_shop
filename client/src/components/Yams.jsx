import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrementRetry, setWin, setTypeOfWin, setDiceValues, toggleLock } from "../store/slice/yamsSlice"
import { selectYams } from "../store/selectors/yams-selector"

import Dice from "./Dice"
import Button from "./Button"
import Victory from "./Victory"

const Yams = () => {
    const dispatch = useDispatch()

    const { dice, lockedIndex, retry, isWin, type } = useSelector(selectYams)

    useEffect(() => {
        if (!dice.includes(null)) {
            checkVictory(dice)
        }
    }, [dice])

    const handleClick = () => {
        if (retry !== 0) {
            dispatch(setDiceValues())
            dispatch(decrementRetry())
        }
    }

    const handleSelect = (index) => {
        if (!dice.includes(null)) {
            dispatch(toggleLock(index))
        }
        console.log("Lancez le jeu pour séléctioner un dé !")
    }

    const checkVictory = (diceValues) => {
        const counts = {}

        for (const val of diceValues) {
            counts[val] = (counts[val] ?? 0) + 1
        }

        const values = Object.values(counts)
        let win = 0

        if (values.includes(5)) {
            win = 3 //YAMS
        } else if (values.includes(3) && values.includes(2)) {
            win = 2 //FULL
        } else if (values.includes(4)) {
            win = 2 //CARRE
        } else if (values.includes(3)) {
            win = 1 //BRELAN
        } else if (values.filter(v => v === 2).length === 2) {
            win = 1 //DOUBLE PAIRE
        }

        if (win > 0) {
            dispatch(setWin(true))
            dispatch(setTypeOfWin(win))
        }
    }

    return (
        <div className="yams-game">
            <div className="list-dice">
                {dice.map((value, index) => (
                    <Dice
                        key={index}
                        value={value}
                        locked={lockedIndex === index && retry > 0 && !isWin}
                        end={retry === 0}
                        onClick={() => handleSelect(index)}
                    />
                ))}
            </div>

            {isWin && <Victory win={type} />}

            <Button
                label={retry > 0 ? `Il vous reste ${retry} essai(s)` : "Vous n'avez plus d'essais"}
                onClick={handleClick}
                disabled={retry === 0}
                className="game"
            />
        </div>
    )
}

export default Yams

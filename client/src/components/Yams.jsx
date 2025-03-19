import Dice from "./Dice"
import Button from "./Button"
import { useState } from "react"

import "../assets/style/yams.scss"
const Yams = () => {
    const [retry, setRetry] = useState(3)
    const [diceValues, setDiceValues] = useState(Array(5).fill(null))

    const handleClick = () => {
        if (retry != 0) {
            setRetry(retry - 1)
            setDiceValues(diceValues.map(() => Math.floor(Math.random() * 6) + 1))
        }
    }

    return (
        <div className="yams-game">
            <div className="list-dice">
                {diceValues.map((value, index) => (
                    <Dice key={index} value={value} />
                ))}
            </div>
            <Button label={retry > 0 ? `Il vous reste ${retry} essai(s)` : "Vous n'avez plus d'essais"} onClick={handleClick} disabled={retry == 0} />
        </div>
    )
}

export default Yams
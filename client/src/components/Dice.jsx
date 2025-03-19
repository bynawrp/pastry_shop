import d1 from "../assets/img/d1.png"
import d2 from "../assets/img/d2.png"
import d3 from "../assets/img/d3.png"
import d4 from "../assets/img/d4.png"
import d5 from "../assets/img/d5.png"
import d6 from "../assets/img/d6.png"
import dLock from "../assets/img/d_lock.png"

const Dice = ({ value }) => {
    const diceImages = {
        1: d1,
        2: d2,
        3: d3,
        4: d4,
        5: d5,
        6: d6
    }

    return (
        <div className="dice">
            <img
                src={value ? diceImages[value] : dLock}
                alt={`Dé ${value || "verrouillé"}`}
            />
        </div>
    )
}

export default Dice

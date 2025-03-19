import Yams from "../../components/Yams"

import "../../assets/style/game.scss"
const GamePage = () => {
    return (
        <div className="container">
            <h1>Jeu du yams</h1>

            <div className="rules">
                <p>Vous avez 3 lancés</p>
                <p>Si vous obtenez une paire (deux dés identiques), vous gagnez 1 pâtisserie.</p>
                <p>Avec un brelan (trois dés identiques), c'est 2 pâtisseries.</p>
                <p>Et en cas de carré (quatre dés identiques), vous remportez 3 pâtisseries.</p>
                <p>Accumulez les délices pour remporter la parie !</p>
            </div>

            <Yams />

        </div>
    )
}

export default GamePage
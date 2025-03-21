import Yams from "../../components/Yams"
import "../../assets/style/game.scss"

const GamePage = () => {
    return (
        <div className="container">
            <h1>Jeu du Yams</h1>

            <div className="rules">
                <p>Vous avez <strong>3 lancers</strong> pour tenter de gagner des pâtisseries.</p>
                <p>🎲 <strong>Double paire</strong> (deux paires identiques) ou <strong>brelan</strong> (trois dés identiques) : vous gagnez <strong>1 pâtisserie</strong>.</p>
                <p>🎲 <strong>Carré</strong> (quatre dés identiques) ou <strong>Full</strong> (un brelan + une paire) : vous remportez <strong>2 pâtisseries</strong>.</p>
                <p>🎲 <strong>Yams</strong> (cinq dés identiques) : jackpot, vous gagnez <strong>3 pâtisseries</strong> !</p>
                <p>Accumulez les délices et remportez la partie ! 🍩🥐</p>
            </div>

            <Yams />
        </div>
    )
}

export default GamePage

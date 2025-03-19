import { useNavigate } from "react-router"
import { useEffect } from "react"
import { useGetAllPastryQuery } from "../../store/slice/gameSlice"

import Button from "../../components/Button"
import ListPastry from "../../components/ListPastry"

import "../../assets/style/home.scss"
const HomePage = () => {
    const navigate = useNavigate()

    const { data: pastries, error, isLoading } = useGetAllPastryQuery()

    const handleClick = () => {
        navigate("/game")
    }

    return (
        <div className="container home">
            <h1>Jouez à notre jeu de Yam's pour tenter de remporter des lots !</h1>
            <Button label="Jouer" onClick={handleClick} className="game" />


            {isLoading ? (
                <p>Chargement des pâtisseries...</p>
            ) : error ? (
                <p>Erreur lors du chargement des pâtisseries.</p>
            ) : pastries.length > 0 ? (
                <ListPastry data={pastries} />
            ) : (
                <p>Aucune pâtisserie disponible.</p>
            )}
        </div>
    )
}

export default HomePage

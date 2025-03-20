import { useNavigate } from "react-router"
import { useGetAllGamePastryQuery } from "../../store/slice/pastrySlice"

import Button from "../../components/Button"
import ListPastry from "../../components/ListPastry"

import "../../assets/style/home.scss"
const HomePage = () => {
    const navigate = useNavigate()

    const { data, isError, isLoading, isSuccess } = useGetAllGamePastryQuery()

    const handleClick = () => {
        navigate("/game")
    }

    return (
        <div className="container home">
            <h1>Jouez à notre jeu de Yam's pour tenter de remporter des lots !</h1>
            <Button label="Jouer" onClick={handleClick} className="game" />


            {isLoading ? (
                <p>Chargement des pâtisseries...</p>
            ) : isError ? (
                <p>Erreur lors du chargement des pâtisseries.</p>
            ) : isSuccess && data.length > 0 ? (
                <ListPastry data={data} />
            ) : (
                <p>Aucune pâtisserie disponible.</p>
            )}
        </div>
    )
}

export default HomePage

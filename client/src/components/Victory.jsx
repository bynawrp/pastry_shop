import { useGetWonPastryQuery } from "../store/slice/pastrySlice"

const Victory = ({ win }) => {
    const { data, isSuccess, isLoading, isError } = useGetWonPastryQuery(win)

    return (
        <div className="victory-message">
            <span><strong>BRAVO</strong>, vous avez gagné :</span>

            {isLoading && <p>Chargement...</p>}
            {isError && <p>Erreur lors de la récupération des données.</p>}

            {isSuccess && (
                data?.length > 0 ? (
                    <ul>
                        {data.map((pastry, index) => (
                            <li key={index}>
                                {pastry.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Mais on a plus de stock force à toi ! </p>
                )
            )}
        </div>
    )
}

export default Victory

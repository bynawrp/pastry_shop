import { useGetWonPastryQuery } from "../store/slice/pastrySlice"

const Result = ({ type, win }) => {
    const { data, isSuccess, isLoading, isError } = useGetWonPastryQuery(type)

    return (
        <div className={win ? "victory-message" : "looser-message"}>
            {win ? (
                <>
                    <span><strong>BRAVO</strong>, vous avez gagné :</span>

                    {isLoading && <p>Chargement...</p>}
                    {isError && <p>Erreur lors de la récupération des données.</p>}

                    {isSuccess && (
                        data?.length > 0 ? (
                            <ul>
                                {data.map((pastry, index) => (
                                    <li key={index}>{pastry.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Mais on a plus de stock force à toi !</p>
                        )
                    )}
                </>
            ) : (
                <span><strong>PERDU</strong>, vous n'avez pas eu de chance</span>
            )}
        </div>
    )
}

export default Result

import Pastry from "./Pastry"

const ListPastry = ({ data }) => {
    return (
        <div className="pastry">
            <h2>Lots restants :</h2>

            <div className="list-pastry">
                {data.map((pastry) => (
                    <Pastry key={pastry.id} data={pastry} />
                ))}
            </div>
        </div>
    )
}

export default ListPastry
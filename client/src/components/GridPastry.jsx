import { useDeletePastryMutation } from "../store/slice/crudSlice";

import Button from "./Button";

const GridPastry = ({ data }) => {
    const [deletePastry] = useDeletePastryMutation()

    const handleDelete = async (id) => {
        try {
            await deletePastry(id)

            console.log(`Pâtisserie ${id} supprimée avec succès.`);
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    };

    return (
        <div className="grid-pastry">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Nom</th>
                        <th>Quantité restante</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pastry) => (
                        <tr key={pastry.id}>
                            <td>
                                <img
                                    src={pastry.image}
                                    alt={pastry.name}

                                />
                            </td>
                            <td>{pastry.name}</td>
                            <td>{pastry.quantity}</td>
                            <td>
                                <Button label={"Supprimer"} onClick={() => handleDelete(pastry.id)} className={"delete"} />
                                <Button label={"Modifier"} onClick={() => console.log("Modifier", pastry.id)} className={"update"} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GridPastry;

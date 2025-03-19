import { useDispatch } from "react-redux"
import { setPastryName, setPastryImage, setPastryQuantity, setPastryForm, setPastryIsUpdate, setPastryIdUpdate } from "../store/slice/formSlice"


import { useDeletePastryMutation } from "../store/slice/crudSlice"

import Button from "./Button"

const GridPastry = ({ data, refetch }) => {
    const dispatch = useDispatch()

    const [deletePastry] = useDeletePastryMutation()

    const handleDelete = async (id) => {
        try {
            await deletePastry(id)
            refetch()
            console.log(`Pâtisserie ${id} supprimée avec succès.`)
        } catch (error) {
            console.error("Erreur lors de la suppression :", error)
        }
    }

    const handleEdit = (pastry) => {
        dispatch(setPastryIsUpdate(true))
        dispatch(setPastryName(pastry.name))
        dispatch(setPastryQuantity(pastry.quantity))
        dispatch(setPastryImage(pastry.image))
        dispatch(setPastryForm(true))
        dispatch(setPastryIdUpdate(pastry.id))
        // console.log(pastry.id)
    }


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
                                <Button label={"Modifier"} onClick={() => handleEdit(pastry)} className={"update"} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GridPastry

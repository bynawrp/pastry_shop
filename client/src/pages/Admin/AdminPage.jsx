import { useGetAllPastryQuery } from "../../store/slice/crudSlice"
import { useDispatch, useSelector } from "react-redux"
import { selectPastryForm } from "../../store/selectors/form-selector"
import { setPastryForm, setPastryIsUpdate } from "../../store/slice/formSlice"

import Button from "../../components/Button"
import GridPastry from "../../components/GridPastry"
import FormPastry from "../../components/FormPastry"

import "../../assets/style/admin.scss"

const AdminPage = () => {
    const dispatch = useDispatch()
    const { data: pastry, isLoading, isError, refetch } = useGetAllPastryQuery()
    const { showForm } = useSelector(selectPastryForm)


    if (isLoading) return <p>Chargement des pâtisseries...</p>
    if (isError) return <p>Erreur lors du chargement des pâtisseries.</p>

    const handleClick = () => {
        dispatch(setPastryIsUpdate(false))
        dispatch(setPastryForm(true))
    }

    return (
        <div className="container">
            <h1>Administration</h1>

            {
                !showForm ? (
                    <div className="admin-panel">
                        <h2>Liste des pâtisseries :</h2>

                        <Button label={"Ajouter une pâtisserie"} onClick={handleClick} className={"add"} />
                        <br />
                        {pastry && pastry.length > 0 ? (
                            <GridPastry data={pastry} refetch={refetch} />
                        ) : (
                            <p>Aucune pâtisserie disponible.</p>
                        )}
                    </div>
                ) : (
                    <FormPastry refetch={refetch} />
                )
            }
        </div>
    )
}

export default AdminPage
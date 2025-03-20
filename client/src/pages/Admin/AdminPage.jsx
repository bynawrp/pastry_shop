import { useGetAllPastryQuery } from "../../store/slice/pastrySlice"

import { useDispatch, useSelector } from "react-redux"
import { selectPastryForm } from "../../store/selectors/form-selector"
import { setPastryForm, setPastryIsUpdate } from "../../store/slice/formSlice"

import Button from "../../components/Button"
import GridPastry from "../../components/GridPastry"
import FormPastry from "../../components/FormPastry"

import "../../assets/style/admin.scss"

const AdminPage = () => {
    const dispatch = useDispatch()
    const { data, isLoading, isError, isSuccess } = useGetAllPastryQuery()
    const { showForm } = useSelector(selectPastryForm)

    const handleClick = () => {
        dispatch(setPastryIsUpdate(false))
        dispatch(setPastryForm(true))
    }

    return (
        <div className="container">
            <h1>Administration</h1>

            {!showForm ? (
                <div className="admin-panel">
                    <h2>Liste des pâtisseries :</h2>

                    <Button label={"Ajouter une pâtisserie"} onClick={handleClick} className={"add"} />

                    {isLoading ? (
                        <p>Chargement des pâtisseries...</p>
                    ) : isError ? (
                        <p>Erreur lors du chargement des pâtisseries.</p>
                    ) : isSuccess && data?.length > 0 ? (
                        <GridPastry data={data} />
                    ) : (
                        <p> Aucune pâtisserie disponible.</p>
                    )}
                </div>
            ) : (
                <FormPastry />
            )}
        </div>
    )
}

export default AdminPage
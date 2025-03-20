import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectPastryForm } from "../../store/selectors/form-selector"
import { setPastryForm, setPastryIsUpdate } from "../../store/slice/formSlice"
import { useGetAllPastryQuery } from "../../store/slice/pastrySlice"
import { useGetUserQuery } from "../../store/slice/userSlice"

import Button from "../../components/Button"
import GridPastry from "../../components/GridPastry"
import FormPastry from "../../components/FormPastry"

import "../../assets/style/admin.scss"
import { useNavigate } from "react-router"

const AdminPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data, isLoading, isError, isSuccess } = useGetAllPastryQuery()
    const { showForm } = useSelector(selectPastryForm)

    const { isSuccess: isConnected, isLoading: waiting } = useGetUserQuery()

    const handleClick = () => {
        dispatch(setPastryIsUpdate(false))
        dispatch(setPastryForm(true))
    }

    useEffect(() => {
        if (!waiting && !isConnected) {
            navigate("/login")
        }
    }, [waiting, isConnected, navigate])

    return (
        <div className="container">
            <h1>Administration</h1>

            {!showForm ? (
                <div className="admin-panel">
                    {isLoading && <p>Chargement des pâtisseries...</p>}
                    {isError && <p>Erreur lors du chargement des pâtisseries.</p>}

                    {isSuccess && (
                        <>
                            <h2>Liste des pâtisseries :</h2>
                            <Button label={"Ajouter une pâtisserie"} onClick={handleClick} className={"add"} />

                            {data?.length > 0 ? (
                                <GridPastry data={data} />
                            ) : (
                                <p>Aucune pâtisserie disponible.</p>
                            )}
                        </>
                    )}
                </div>
            ) : (
                <FormPastry />
            )}
        </div>
    )
}

export default AdminPage
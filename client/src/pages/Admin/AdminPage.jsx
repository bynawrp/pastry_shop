import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import { selectPastryForm } from "../../store/selectors/form-selector"
import { selectWord } from "../../store/selectors/searchbar-selector"
import { setWord } from "../../store/slice/searchbarSlice"
import { setPastryForm, setPastryIsUpdate } from "../../store/slice/formSlice"
import { useGetAllPastryQuery, useSearchPastryByWordQuery } from "../../store/slice/pastrySlice"
import { useGetUserQuery } from "../../store/slice/userSlice"

import Button from "../../components/Button"
import GridPastry from "../../components/GridPastry"
import FormPastry from "../../components/FormPastry"
import Input from "../../components/Input"

import "../../assets/style/admin.scss"

const AdminPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { showForm } = useSelector(selectPastryForm)
    const word = useSelector(selectWord)

    const { isSuccess: isConnected, isLoading: waiting } = useGetUserQuery()
    const { data: allPastries, isLoading, isError, isSuccess } = useGetAllPastryQuery()
    const { data: pastrySearch, error } = useSearchPastryByWordQuery(word, { skip: word.length < 3 })

    // console.log(pastrySearch, error?.data?.message)
    const pastryToShow = word.length >= 3
        ? error ? [] : pastrySearch ? [pastrySearch] : []
        : allPastries
    // console.log(pastryToShow)

    useEffect(() => {
        if (!waiting && !isConnected) {
            navigate("/login")
        }
    }, [waiting, isConnected, navigate])

    const handleChange = (e) => {
        dispatch(setWord(e.target.value))
    }

    const handleClick = () => {
        dispatch(setPastryIsUpdate(false))
        dispatch(setPastryForm(true))
    }

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
                            <div className="outil">
                                <Button label={"Ajouter une pâtisserie"} onClick={handleClick} className={"add"} />
                                <Input name={"searchbar"} value={word} onChange={handleChange} className={"searchbar"} placeholder={"Rechercher une pâtisserie..."} />
                            </div>


                            {pastryToShow.length > 0 ? (
                                <GridPastry data={pastryToShow} />
                            ) : (
                                <p>{word.length >= 3 ? error?.data?.message : "Aucune pâtisserie disponible."}</p>
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

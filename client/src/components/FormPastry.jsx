import { useDispatch, useSelector } from "react-redux"
import { selectPastryForm, selectError } from "../store/selectors/form-selector"
import { setPastryName, setPastryImage, setPastryQuantity, resetPastryForm, setPastryForm, resetPastryIdUpdate, setError } from "../store/slice/formSlice"
import { useAddPastryMutation, useUpdatePastryMutation } from "../store/slice/pastrySlice"

import InputLogin from "./InputLogin"
import Button from "./Button"

const FormPastry = () => {
    const dispatch = useDispatch()


    const [addPastry] = useAddPastryMutation()
    const [updatePastry] = useUpdatePastryMutation()

    const { name, quantity, image, isUpdate, idUpdate } = useSelector(selectPastryForm)
    const { error } = useSelector(selectError)

    // console.log(error)

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "name") {
            dispatch(setPastryName(value))
        } else if (name === "quantity") {
            dispatch(setPastryQuantity((value)))
        } else if (name === "image") {
            dispatch(setPastryImage(value))
        }
    }

    const handleCancel = () => {
        dispatch(resetPastryForm())
        dispatch(resetPastryIdUpdate())
        dispatch(setPastryForm(false))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (isUpdate) {
                // console.log(idUpdate)
                const formPastry = { name, quantity, image, choice: true }
                // console.log(formPastry)
                await updatePastry({ id: idUpdate, ...formPastry })
                // refetch()
                dispatch(resetPastryForm())
                dispatch(resetPastryIdUpdate())
                dispatch(setPastryForm(false))
                console.log("Modification de la pâtisserie", idUpdate)
            } else {
                const formPastry = { name, quantity, image, quantityWon: 0, choice: true }
                if (formPastry.quantity > 0) {
                    await addPastry(formPastry)
                    // refetch()
                    dispatch(resetPastryForm())
                    dispatch(setPastryForm(false))
                    console.log("Pâtisserie ajoutée avec succès !")
                } else {
                    dispatch(setError("La quantité doit être un nombre entier supérieur à 0"))
                }
            }
        } catch (err) {
            console.error("Erreur lors de l'ajout/modification de la pâtisserie :", err)
        }
    }

    return (
        <div className="form-pastry">
            <h2>{isUpdate ? "Modifier une pâtisserie" : "Ajouter une pâtisserie"} :</h2>
            <form onSubmit={handleSubmit}>
                <InputLogin label="Nom" name="name" value={name} onChange={handleChange} />
                <InputLogin label="Quantité" name="quantity" type="number" value={quantity} onChange={handleChange} />
                <InputLogin label="Image" name="image" value={image} onChange={handleChange} />
                {error && <div className="error-message">{error}</div>}
                <div className="validate-form">
                    <Button label="Annuler" onClick={handleCancel} className="cancel" />
                    <span></span>
                    <Button label={isUpdate ? "Modifier la pâtisserie" : "Créer la pâtisserie"} type="submit" className={isUpdate ? "update" : "add"} />
                </div>
            </form>
        </div>
    )
}

export default FormPastry

import { useDispatch, useSelector } from "react-redux"
import { selectPastryForm } from "../store/selectors/form-selector"
import { setPastryName, setPastryImage, setPastryQuantity, resetPastryForm, setPastryForm, resetPastryIdUpdate } from "../store/slice/formSlice"
import { useAddPastryMutation, useUpdatePastryMutation } from "../store/slice/crudSlice"

import InputLogin from "./InputLogin"
import Button from "./Button"

const FormPastry = ({ refetch }) => {
    const dispatch = useDispatch()


    const [addPastry] = useAddPastryMutation()
    const [updatePastry] = useUpdatePastryMutation()

    const { name, quantity, image, isUpdate, idUpdate } = useSelector(selectPastryForm)


    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "name") {
            dispatch(setPastryName(value))
        } else if (name === "quantity") {
            dispatch(setPastryQuantity(value))
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
                refetch()
                dispatch(resetPastryForm())
                dispatch(resetPastryIdUpdate())
                dispatch(setPastryForm(false))
                console.log("Modification de la pâtisserie", idUpdate)
            } else {
                const formPastry = { name, quantity, image, quantityWon: 0, choice: true }
                await addPastry(formPastry)
                refetch()
                dispatch(resetPastryForm())
                dispatch(setPastryForm(false))
                console.log("Pâtisserie ajoutée avec succès !")
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
                <Button label="Annuler" onClick={handleCancel} />
                <Button label={isUpdate ? "Modifier la pâtisserie" : "Créer la pâtisserie"} type="submit" />
            </form>
        </div>
    )
}

export default FormPastry

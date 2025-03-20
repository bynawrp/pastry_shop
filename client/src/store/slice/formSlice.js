import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    login: {
        email: "",
        password: ""
    },

    pastry: {
        name: "",
        quantity: "",
        image: "",
        showForm: false,
        isUpdate: false,
        idUpdate: null
    },
    error: ""
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {

        //LOGIN
        setLoginEmail: (state, action) => {
            state.login.email = action.payload
        },

        setLoginPassword: (state, action) => {
            state.login.password = action.payload
        },

        resetLoginForm: (state) => {
            state.login = initialState.login
        },

        //PASTRY
        setPastryName: (state, action) => {
            state.pastry.name = action.payload
        },

        setPastryQuantity: (state, action) => {
            state.pastry.quantity = action.payload
        },

        setPastryImage: (state, action) => {
            state.pastry.image = action.payload
        },

        setPastryForm: (state, action) => {
            state.pastry.showForm = action.payload
        },

        setPastryIsUpdate: (state, action) => {
            state.pastry.isUpdate = action.payload
        },

        setPastryIdUpdate: (state, action) => {
            state.pastry.idUpdate = action.payload
        },

        resetPastryIdUpdate: (state) => {
            state.pastry.idUpdate = initialState.pastry.idUpdate
        },

        resetPastryForm: (state) => {
            state.pastry = initialState.pastry
            state.error = initialState.error
        },

        //ERROR
        setError: (state, action) => {
            state.error = action.payload
        },

        resetError: (state) => {
            state.error = initialState.error
        },

    }
})

export const { setLoginEmail, setLoginPassword, setPastryName, setPastryQuantity, setPastryImage, setPastryForm, setError, resetError, resetLoginForm, resetPastryForm, setPastryIsUpdate, resetPastryIdUpdate, setPastryIdUpdate } = formSlice.actions
export default formSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    word: ""
}

const searchbarSlice = createSlice({
    name: "searchbar",
    initialState,
    reducers: {

        setWord(state, action) {
            state.word = action.payload
        },


        resetWord() {
            return initialState
        }

    }
})

export const { setWord, resetWord } = searchbarSlice.actions
export default searchbarSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dice: Array(5).fill(null),
    lockedIndex: null,
    retry: 3,
    isWin: false,
    type: 0
}

const yamsSlice = createSlice({
    name: "yams",
    initialState,
    reducers: {
        decrementRetry(state) {
            if (state.retry > 0) {
                state.retry--
            }
        },

        setWin(state, action) {
            state.isWin = action.payload
            if (action.payload) {
                state.lockedIndex = null
                state.retry = 0
            }
        },

        setTypeOfWin(state, action) {
            state.type = action.payload
        },

        setDiceValues(state) {
            state.dice = state.dice.map((val, i) =>
                state.lockedIndex === i ? val : Math.floor(Math.random() * 6) + 1
            )
        },

        toggleLock(state, action) {
            if (state.isWin || state.retry === 0) return
            const index = action.payload
            state.lockedIndex = state.lockedIndex === index ? null : index
        },

        resetYams() {
            return initialState
        }

    }
})

export const { decrementRetry, setWin, setTypeOfWin, setDiceValues, toggleLock, resetYams } = yamsSlice.actions
export default yamsSlice.reducer

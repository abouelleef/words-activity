import { createSlice } from "@reduxjs/toolkit";
import { Word } from "../interfaces/interfaces";
import { RootState } from "./store";



// Storing the app state
const initialState: {
    words: Word[],
    score: number,
    currentWordIndex: number,
    rank: number
} = {
    words: [],
    score: 0,
    currentWordIndex: 0,
    rank: 0
}


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

        // seting the words list
        setWords: (state, { payload }) => {
            state.words = payload
        },

        // Getting the next word by increasing the array index by 1
        getNextWord: (state) => {
            state.currentWordIndex += 1
        },

        // in case of the correct answer the score will increase by 10
        increaseScore: (state) => {
            state.score += 10
        },

        // setting the rank result returned from the server
        setRank: (state, { payload }) => {
            state.rank = payload
        },

        // Resting the global state in case of the player pressed try again
        resetState: () => initialState,

    },
})

export default appSlice;
export const { setWords, getNextWord, increaseScore, setRank, resetState } = appSlice.actions;


export const selectCurrentWord = (state: RootState) => state.app.currentWordIndex;
export const selectScore = (state: RootState) => state.app.score;
export const selectRank = (state: RootState) => state.app.rank;

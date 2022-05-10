import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: []
};

const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNotes: (state, { payload }) => {
            state.notes = [...state.notes, payload];
        },
        removeNote: (state, { payload }) => {
            const index = state.notes.indexOf(payload);
            if (index > -1) {
                state.notes.splice(index, 1); 
            }
        },
    }
});

export const { addNotes, removeNote } = noteSlice.actions;
export const getAllNotes = (state) => state.notes;
export default noteSlice.reducer;
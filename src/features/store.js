import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/noteSlice";

export const store = configureStore({
    reducer: {
        notes:notesReducer,
    },
})
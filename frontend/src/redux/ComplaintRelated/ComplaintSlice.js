import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ComplaintsList: [],
    loading: false,
    error: null,
    response: null,
};

const ComplaintSlice = createSlice({
    name: 'Complaint',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        getSuccess: (state, action) => {
            state.ComplaintsList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError
} = ComplaintSlice.actions;

export const ComplaintReducer = ComplaintSlice.reducer;
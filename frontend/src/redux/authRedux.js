import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        isFetching: false,
        error: false,
    },
    reducers: {
        // login
        loginStart: (state) => {
            state.isFetching = true;
            state.isAuthenticated = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.isAuthenticated = true;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            state.isAuthenticated = false;
        }
    }
})

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
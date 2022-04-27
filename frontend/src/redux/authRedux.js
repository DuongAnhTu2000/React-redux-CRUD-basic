import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        isAuth: false,
    },
    reducers: {
        // login
        loginStart: (state) => {
            state.isAuth = false;
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isAuth = true;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            state.isAuth = false;

        }
    }
})

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
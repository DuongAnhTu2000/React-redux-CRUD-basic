import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    value: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // get users
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUser: (state, action) => {
      state.isFetching = false;
      state.value = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // add user
    addUser: (state, action) => {
      state.isFetching = false;
      state.value = [...state.value, action.payload];
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    // delete user
    deleteUser: (state, action) => {
      state.isFetching = false;
      state.value = state.value.filter((user) => user._id !== action.payload);
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    // update user
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUser: (state, action) => {
      state.value[
        state.value.findIndex((item) => item.id === action.payload.id)
      ] = action.payload;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  getUserStart,
  getUser,
  getUserFailure,
  deleteUserStart,
  deleteUser,
  deleteUserFailure,
  addUserStart,
  addUser,
  addUserFailure,
  updateUserStart,
  updateUser,
  updateUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
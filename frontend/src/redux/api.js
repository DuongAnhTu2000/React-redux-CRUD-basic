import { loginFailure, loginStart, loginSuccess } from './authRedux';
import {
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
} from "./action";
import { persistor } from './store'
import axios from 'axios';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/users/login", user)

    dispatch(loginSuccess(res.data))
    setTimeout(() => {
      persistor.purge();
    }, res.data.expiresIn);
    console.log(res.data);
  } catch (err) {
    console.log(err.response.data)
    dispatch(loginFailure());
  }
}

// add user or register

export const forgotPassword = async (email) => {
  try {
    const res = await axios.put("http://localhost:5000/api/users/forgot-password", email);
    console.log(res.data)
  } catch (err) {
    console.log(err.response.data.msg)
  }
}

export const addUsername = async (dispatch, user) => {
  dispatch(addUserStart());
  try {
    const res = await axios.post("http://localhost:5000/api/users/register", user);
    dispatch(addUser(res.data.user._doc));
    alert(res.data.msg)
  } catch (err) {
    dispatch(addUserFailure());
  }
};

export const getUsername = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get("http://localhost:5000/api/users");
    console.log('res', res)
    dispatch(getUser(res.data))
  } catch (err) {
    dispatch(getUserFailure())
  }
}

export const deleteUsername = async (dispatch, id) => {
  dispatch(deleteUserStart());
  try {

    const res = await axios.delete("http://localhost:5000/api/users/" + id);
    console.log(res.data);
    dispatch(deleteUser(id))
    console.log('id: ', id);
  } catch (err) {
    dispatch(deleteUserFailure())
  }
}

export const updateUsername = async (dispatch, user) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.put("http://localhost:5000/api/users/" + user._id, user);
    console.log(res.data);
    dispatch(updateUser(user));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
import axios from 'axios'
import { server } from '../store'

// Action to load user data
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "loadUserRequest" });

        const { data } = await axios.get(`${server}/me`, {
            withCredentials: true
        });

        dispatch({
            type: "loadUserSuccess",
            payload: data.user
        });

    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload: error.response?.data?.message || error.message || "An error occurred"
        });
    }
};

// Action to log out the user
export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "logoutRequest" });

        const { data } = await axios.get(`${server}/logout`, {
            withCredentials: true
        });

        dispatch({
            type: "logoutSuccess",
            payload: data.message,
        });

    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: error.response?.data?.message || error.message || "An error occurred"
        });
    }
};

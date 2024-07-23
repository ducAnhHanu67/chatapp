import axios from 'axios'
import { loginFailed, loginStart, loginSuccess } from './authSlice'
// import { getChatId } from './chatSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:5000/api/users/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed())
        alert(error.response.data)


    }
}
export const RegisterUser = async (user, navigate) => {
    try {
        const res = await axios.post('http://localhost:5000/api/users/register', user);
        console.log(res.data);
        navigate('/login');
    } catch (error) {
        alert(error.response.data)
    }
}
export const FindUser = async (userName) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/users/find/${userName}`);
        // console.log(res.data)
        return res.data;

    } catch (error) {
        // alert(error.response.data);
        console.log(error);
        // throw (error)
    }

}
export const createChat = async (usersId) => {
    try {
        const res = await axios.post('http://localhost:5000/api/chat', usersId);
        return res.data;

    } catch (error) {
        console.log(error);
    }

}
export const sendMessage = async (message) => {
    try {
        const res = await axios.post('http://localhost:5000/api/messages', message);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export const getMessages = async (chatId) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/messages/${chatId}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


import axios from 'axios'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS ';
export const  LOGIN_REQUEST= 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function Login(data) {
    console.log(data,'data')
    return async dispatch => {
    dispatch(LoginRequest("Request"));
    await axios
    .post('https://reqres.in/api/login',{
        email:data.email,
        password:data.password
    })
    .then(function (response) {
        console.log(response,'response')
    dispatch(LoginSuccess(response.data));
    
    })
    .catch(function (error) {
    console.log(error, "error.., failure");
    dispatch(LoginFailure("login failure"));
    });
    };
    }
    
    const LoginSuccess = response => ({
    type: "LOGIN_SUCCESS",
    response
    });
    
    const LoginRequest = response => ({
    type: "LOGIN_REQUEST",
    response
    });
    
    const LoginFailure = error => ({
    type: "LOGIN_FAILURE",

    error
    });
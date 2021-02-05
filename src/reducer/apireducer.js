import Action from '../action/action'

const initialState = {
    loginresp: "",
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                error: false,
                loginresp:action.response
            };
        case "LOGIN_REQUEST":
            return {
                ...state,
                error: false

            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                error: true,
            };


        default:
            return state;
    }
};
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootreducer';
export default function configureStore(initialState = {}) {
return createStore(
rootReducer,
initialState,
applyMiddleware(thunk)
);
}
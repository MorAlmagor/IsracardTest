import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import MoviesReducer from '../store/reducers/MoviesReducer'

const rootReducer = combineReducers({
  movie: MoviesReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
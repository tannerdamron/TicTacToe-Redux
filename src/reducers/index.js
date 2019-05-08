import { combineReducers } from 'redux';
import SquaresReducer from './squares-reducer';
import XIsNextReducer from './x-is-next-reducer';

const rootReducer = combineReducers({
  squares: SquaresReducer,
  xIsNext: XIsNextReducer,
});

export default rootReducer;
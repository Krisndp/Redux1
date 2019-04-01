import {combineReducers} from 'redux';
import reducerEmployee from './reducerEmployee';
import numberReducer from './numberReducer';
import errorZero from './errorZero'
const reducers = combineReducers({
    reducerEmployee,
    numberReducer,
    errorZero,
})
export default reducers;
import data from './data.json';

const DEFAULT_STATE = {name: 'abc', age: 'xuys'};

const reducerEmployee = (state = DEFAULT_STATE, action)=>{
    switch(action.type){
        case "GET_DATA":
            return data;
        default:
            return state;
    }
}
export default reducerEmployee;
import {GET_DATA} from '../actions/actionType';
const DeFAULT_STATE = {};
function reducerEmployee(state = DeFAULT_STATE, action){

    switch(action.type){
        case GET_DATA:
            return action.payload;

        default:
            return state;
    }
}
export default reducerEmployee;
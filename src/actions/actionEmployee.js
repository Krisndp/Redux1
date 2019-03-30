import { GET_DATA } from './actionType';
import data from '../reducers/data.json';
export function getData(){
    return{
        type: GET_DATA,
        payload: data,
    }
}
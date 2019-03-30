import {createStore} from 'redux';
import * as reducers from './reducers';
export default store = createStore(
    //Reducer
    //console.log('mm'),
    reducers,
    //PreloaderState
    {}
    //MiddleWare
);
//CreatStore nhan vao reducer, middleware
import React from 'react';
import { View, Text } from 'react-native';
// import { Provider } from 'react-redux';
// import {createStore} from 'redux';
// //import {store} from './configStore';
// import * as reducers from './reducers';
// const store = createStore(
//     //Reducer
//     //console.log('mm'),
//     reducers,
//     //PreloaderState
//     {}
//     //MiddleWare
// );
// //CreatStore nhan vao reducer, middleware

// store.subscribe(() => console.log(store.getState()))

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: GET_DATA });
import data from './reducers/data.json';
console.log(data)
export default class App extends React.Component {

    render() {
        return (
            //store dung chung cho tat ca cac component trong Provider
           // <Provider store = {store}>
                <View style={{ flex: 1, backgroundColor:'red' }}>

                </View>
            //</Provider>
        )
    }
}
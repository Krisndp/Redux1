import React from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './configStore';

export default class App extends React.Component {

    render() {
        return (
            // <View style = {{flex:1}}>

            // </View>
            //store dung chung cho tat ca cac component trong Provider
            <Provider store = {store}>
                 <Main/>
            </Provider>
        )
    }
}

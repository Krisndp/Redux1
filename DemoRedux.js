import App from './src1/App';
import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const defaultState = { value: 10, highlight: false }
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UP'://khai bao toan bo cac state co san
            return { value: state.value + 1, highlight: state.highlight };
        case 'DOWN':
            return { value: state.value - 1, highlight: state.highlight };
        case 'CHANGE_COLOR':
            return { value: state.value, highlight: !state.highlight }
        default:
            return state;
    }
};

const store = createStore(reducer)
export default class DemoRedux extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
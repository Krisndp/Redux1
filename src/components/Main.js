import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators'

class Main extends React.Component {
    componentWillMount() {
        //this.props.getData()
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.props.error()} style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 40 }}>SHOWABS</Text>
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 40 }}>{this.props.myNumber.err}</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <TouchableOpacity onPress={() => this.props.add(4)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 40 }}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.sub(3)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 40 }}>-</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ color: 'black', fontSize: 40 }}>{this.props.myNumber.number}</Text>
                    <Text style={{ color: 'black', fontSize: 40 }}>{this.props.myNumber.histories}</Text>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)

    return { myData: state.reducerEmployee.name, myNumber: state.numberReducer , error: state.errorZero}
}

export default connect(mapStateToProps, actionCreators)(Main);
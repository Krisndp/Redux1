import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux'
class Changecolor extends React.Component{

    render(){
        const color = this.props.high ? 'blue' : 'green';
        return(
            <TouchableOpacity onPress = {()=>{this.props.dispatch({type:'CHANGE_COLOR'})}}>
                <Text style = {{color: color, fontSize: 30}} >Change Color</Text>
            </TouchableOpacity>
        )
    }
}
export default connect(
    (state)=>{
        return { high: state.highlight }
    }
)(Changecolor);
import React from 'react';
import {View, Text} from 'react-native';
import Controller from './Controller'
import {connect} from 'react-redux'
class App extends React.Component{
    render(){
        const color = this.props.myHightlight ? 'yellow' : 'white'
        return(
            <View style = {{flex:1, alignContent:'center', justifyContent: 'center', backgroundColor:'black',paddingTop:30}}>
                <View style = {{flex:1, justifyContent:'space-around', alignContent:'center'}}>
                    <Text style={{color:'yellow', fontSize:30, textAlign:'center'}}>EXAMPLE 1: {'\n'} APP COMPONENT</Text>
                    <Text style = {{color:color, fontSize:40,textAlign:'center'}}>{this.props.myValue}</Text>
                </View>
                <Controller/>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {myValue:state.value, myHightlight: state.highlight};
} 

export default connect(mapStateToProps)(App)
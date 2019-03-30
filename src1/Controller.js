import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import Changecolor from './Changecolor'
class Controller extends React.Component{

    onPress(){
        this.props.dispatch({type:'DOWN'});
        this.props.dispatch({type:'CHANGE_COLOR'});
    }

    render(){
        return(
            <View style = {{flex: 1, alignItems:'center', justifyContent:"space-around", backgroundColor:'yellow', alightSelf:'stretch', margin:20 }}>
                <Text style = {{color:'black', fontSize:20, marginBottom:10}}>
                    CONTROLLER COMPONENT
                </Text>
                <Changecolor/>
                <View style = {{flexDirection:"row", alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{this.props.dispatch({ type: 'UP'})}} style={{backgroundColor:'black', paddingHorizontal: 50, paddingVertical: 25, margin:10, borderRadius:5}}>
                        <Text style={{color:'white', fontSize:40}}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.onPress()}} style={{backgroundColor:'black', paddingHorizontal: 50, paddingVertical: 25, margin:10, borderRadius:5}}>
                        <Text style={{color:'white', fontSize:40}}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


// ko chia se cai gi o component nay
export default connect()(Controller);
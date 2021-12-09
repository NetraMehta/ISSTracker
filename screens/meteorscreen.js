import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Meteorscreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Meteor Screen</Text>
            </View>
        );
    }
}
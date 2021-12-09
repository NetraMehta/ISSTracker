import axios from 'axios';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, SafeAreaView, Platform, StatusBar, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class ISSTracker extends React.Component{
    constructor(){
        super();
        this.state={
            location:{},
        }
    }

    getISSLocation = ()=>{
        axios
            .get('https://api.wheretheiss.at/v1/satellites/25544')
                .then(response=>{this.setState({location: response.data})})
                .catch(error=>{Alert.alert(error.message)})
    }

    componentDidMount(){
        this.getISSLocation();
    }

    render(){
        if(Object.keys(this.state.location).length === 0){
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Loading...</Text>
            </View>
        }
        else{
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/iss_bg.jpg')} style={styles.bgImg}>
                        <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Location</Text>
                        </View>

                        <View style={styles.mapContainer}>
                            <MapView style={styles.map} region={{
                                latitude:this.state.location.latitude,
                                longitude:this.state.location.longitude,
                                latitudeDelta:100,
                                longitudeDelta:100
                            }}>
                                <Marker coordinate={{latitude:this.state.location.latitude, longitude:this.state.location.longitude}}>
                                    <Image source={require('../assets/iss_icon.png')} style={{width:50, height:50}} />
                                </Marker>
                            </MapView>
                        </View>
                    </ImageBackground>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
       // alignItems:'center'
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    bgImg:{
        flex:1,
        //resizeMode:'cover'
    },
    mapContainer:{
        flex:0.6
    },
    map:{
        width:'100%',
        height:'100%'
    }
})
import React, { Component } from 'react'
import {
    View, Text, StyleSheet, ScrollView, ImageBackground, Image
} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import { Icon } from 'native-base'

export default class Sidebar extends Component  {
    render() {
        return (
        <ScrollView>
            <ImageBackground 
                source={require('../assets/image/bg.jpg')}
                style={{width:undefined, padding:16, paddingTop:48}}
                >    
                <Image source={require("../assets/image/char.jpg")} style={styles.profile} />
                <Text style={styles.name}>Muh Fauzan Shiddiq</Text>
            </ImageBackground>
            
            <View style={styles.container}>
                <DrawerNavigatorItems {...this.props} />

            </View>
        </ScrollView>
        )
    }
}
    

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    profile: {
        width:80,
        height:80,
        borderRadius:40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "900",
        marginVertical: 8
    }
});
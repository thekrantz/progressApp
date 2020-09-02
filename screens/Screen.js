import React, { Component } from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
// import { Icon } from 'react-native-vector-icons/FontAwesome'

import { Icon } from 'native-base'

// const myIcon = <Icon name="bars" size={30} color="#900" />;


export default class Screen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1}}>
                    <TouchableOpacity
                        style={{alignItems: "flex-end", margin: 16}}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <Icon type="FontAwesome" name='bars' size={24} />
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems:"center", justifyContent: "center"}}>
                        <Text style={styles.Text}>{this.props.name} Screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    Text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
})

// export default Screen;
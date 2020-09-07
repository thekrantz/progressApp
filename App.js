import React, { Component }  from 'react';
import {
 StyleSheet
} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SensorScreen from './screens/SensorScreen';
import CrudScreen from './screens/CrudScreen'
import CustomDrawerContent from './screens/CustomDrawerContent';
import DataCRUD from './screens/DataCRUD'
import EditCRUD from './screens/EditCRUD'

const Drawer = createDrawerNavigator();

export default class App extends Component {
render() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/> }>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Sensor" component={SensorScreen}/>
                <Drawer.Screen name="CRUD" component={CrudScreen}/>
                <Drawer.Screen name="DataCRUD" component={DataCRUD}/>
                <Drawer.Screen name="EditCRUD" component={EditCRUD}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
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
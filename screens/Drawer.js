import React, {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'


import HomeScreen from './HomeScreen';
import SensorScreen from './SensorScreen';

import CustomDrawerContent from './CustomDrawerContent'

const Drawer = createDrawerNavigator();

export default class App extends Component {
render() {
    return (
        
            <Drawer.Navigator drawerContent={props =>
            <CustomDrawerContent {...props}/> }>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Sensor" component={SensorScreen}/>
            </Drawer.Navigator>
        
    );
}

}
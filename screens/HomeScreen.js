import React ,{ Component } from 'react';
import {View, Text, Button} from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// import SensorScreen from './SensorScreen'


export default class HomeScreen extends Component {
  render() {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => this.props.navigation.navigate('Sensor')}
          title="Go to Sensor List"
        />
      </View>
    )
  }
}

import React ,{ Component } from 'react';
import {View, Text, Button} from 'react-native';



export default class HomeScreen extends Component {
  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>Hey, Welcome to my app</Text>   
        <Text>Swipe left to see the features</Text>
      </View>
    )
  }
}

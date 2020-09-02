import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {
  accelerometer,
  gyroscope,
  magnetometer,
  setUpdateIntervalForType,
  SensorTypes
} from "react-native-sensors";

import { map, filter } from "rxjs/operators";

import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';

setUpdateIntervalForType(SensorTypes.accelerometer, 400);
setUpdateIntervalForType(SensorTypes.gyroscope, 400);
setUpdateIntervalForType(SensorTypes.magnetometer, 400);

const Value = ({name, value}) => (
  <View style={styles.valueContainer}>
    <Text style={styles.valueName}>{name}:</Text>
    <Text style={styles.valueValue}>{new String(value).substr(0, 4)}</Text>
  </View>
)

export default class SensorScreen extends React.Component {
  constructor(props) {
    super(props);
     this.state ={
       x: 0, y: 0, z: 0
     };
  }

  componentDidMount(){
    const subscription = accelerometer
    .pipe(map(({ x, y, z, timestamp}) => this.setState(state => ({
      xacc: x,
      yacc: y,
      zacc: z
    }))) , filter(speed => speed > 20))
    .subscribe(
      speed => console.log(`You moved your phone with ${speed}`),
      error => {
        console.log("The sensor is not available");
      }
    );
    const sub = gyroscope
    .pipe(map(({ x, y, z, timestamp}) => this.setState(state => ({
      xgyro: x,
      ygyro: y,
      zgyro: z
    }))) , filter(speed => speed > 20))
    .subscribe(
      speed => console.log(`You moved your phone with ${speed}`),
      error => {
        console.log("The sensor is not available");
      }
    );
    const subs = magnetometer
    .pipe(map(({ x, y, z, timestamp}) => this.setState(state => ({
      xmag: x,
      ymag: y,
      zmag: z
    }))) , filter(speed => speed > 20))
    .subscribe(
      speed => console.log(`You moved your phone with ${speed}`),
      error => {
        console.log("The sensor is not available");
      }
    );
  
  // mSensorManager.startLightSensor(100);
  // DeviceEventEmitter.addListener('LightSensor', function (data) {
  //   /**
  //   * data.light
  //   **/
  // });
  // mSensorManager.stopLightSensor();
    // setTimeout(() => {
    //   // If it's the last subscription to accelerometer it will stop polling in the native API
    //   sub.unsubscribe();
    // }, 1500);
    }
  render() {
    return(
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../src/Assets/images/acc.png')} />
                <Body>
                  <Text>Sensor Accelerometer</Text>
                </Body>
              </Left>
            </CardItem>
             <Left>
                <Body>
                {/* <Text>Sumbu X : {this.state.xacc}</Text>
                <Text>Sumbu Y : {this.state.yacc}</Text>
                <Text>Sumbu Z : {this.state.zacc}</Text> */}
                {/* <Text> Sumbu X {new String(this.state.xacc).substr(0, 8)}</Text> */}
                <Value name=" Sumbu x" value={this.state.xacc} />
                <Value name=" Sumbu y" value={this.state.yacc} />
                <Value name=" Sumbu z" value={this.state.zacc} />
                </Body>
              </Left> 
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../src/Assets/images/gyro.png')} />
                <Body>
                  <Text>Sensor Gyroscope</Text>
                </Body>
              </Left>
            </CardItem>
             <Left>
                <Body>
                {/* <Text>Sumbu X : {this.state.xgyro}</Text>
                <Text>Sumbu Y : {this.state.ygyro}</Text>
                <Text>Sumbu Z : {this.state.zgyro}</Text> */}
                <Value name=" Sumbu x" value={this.state.xgyro} />
                <Value name=" Sumbu y" value={this.state.ygyro} />
                <Value name=" Sumbu z" value={this.state.zgyro} />
                </Body>
              </Left> 
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../src/Assets/images/magnet.jpg')} />
                <Body>
                  <Text>Sensor Magnetometer</Text>
                </Body>
              </Left>
            </CardItem>
             <Left>
                <Body>
                {/* <Text>Sumbu X : {this.state.xmag}</Text>
                <Text>Sumbu Y : {this.state.ymag}</Text>
                <Text>Sumbu Z : {this.state.zmag}</Text> */}
                <Value name=" Sumbu x" value={this.state.xmag} />
                <Value name=" Sumbu y" value={this.state.ymag} />
                <Value name=" Sumbu z" value={this.state.zmag} />
                </Body>
              </Left> 
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  valueValue: {
    width: 200,
    fontSize: 20
  },
  valueName: {
    width: 100,
    fontSize: 20,
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
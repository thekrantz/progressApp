import React ,{ Component } from 'react';
import {View, Text} from 'react-native';
import axios from 'axios'

import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


export default class CrudScreen extends Component {
    constructor(props) {
        super(props);

        // this.onChangeUsername = this.onChangeUsername.bind(this)
        // this.onChangeNamahotel = this.onChangeNamahotel.bind(this)
        // this.onChangeAlamat = this.onChangeAlamat.bind(this)
        // this.onChangeKlaster = this.onChangeKlaster.bind(this)
        // this.onChangeRate = this.onChangeRate.bind(this)
        // this.onChangePhone = this.onChangePhone.bind(this)
        this.state = {
          namahotel: '',
          rate: '',
          Alamat: '',
          Phone: '',
          Klaster: '',
          username: '',
          users:[]
        };
      }

      // onChangeUsername(e){
      //   this.setState({
      //     username: e.target.value
      //   })
      // }

      // onChangeNamahotel(e){
      //   this.setState({
      //     namahotel: e.target.value
      //   })
      // }

      // onChangeRate(e){
      //   this.setState({
      //     rate: e.target.value
      //   })
      // }

      // onChangeAlamat(e){
      //   this.setState({
      //     Alamat: e.target.value
      //   })
      // }

      // onChangePhone(e){
      //   this.setState({
      //     phone: e.target.value
      //   })
      // }

      // onChangeKlaster(e){
      //   this.setState({
      //     Klaster: e.target.value
      //   })
      // }

      onSubmit = () => {
        // e.preventDefault();
        // console.log('submit press')

        // console.log('ini ', this.state.namahotel)
        const exercises = {
          // username: this.state.username,
          namahotel: this.state.namahotel,
          alamathotel: this.state.Alamat,
          rating: this.state.rate,
          phone: this.state.Phone,
          klaster: this.state.Klaster 
        }

        console.log(' Test ', exercises)
        axios.post('http://192.168.1.39:5000/exercises/add', exercises)
        .then(res => 
          console.log(res.data)
        )
        this.props.navigation.navigate('DataCRUD')
      }

  render() {
    // console.log("Ini ", this.state.namahotel)
    return(
    <Container>
        <Header>
            <Text style={{marginTop: 13, fontSize: 30}}> DATA HOTEL </Text>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Nama Hotel"
                onChangeText={namahotel=> 
                  // console.log(namahotel)
                  this.setState({namahotel: namahotel})
                }
                value={this.state.namahotel}
              />
            </Item>
            <Item>
              <Input placeholder="Alamat" 
               onChangeText={Alamat=> this.setState({Alamat})}
               value={this.state.Alamat}/>
            </Item>
            <Item>
              <Input placeholder="Klaster" 
                onChangeText={Klaster => this.setState({Klaster})}
                value={this.state.Klaster}
              />
            </Item>
            <Item>
              <Input placeholder="No Telp" 
                onChangeText={Phone => this.setState({Phone})}
                value={this.state.Phone}
              />
            </Item>
            <Item last>
              <Input placeholder="Rating" 
                onChangeText={rate => this.setState({rate})}
                value={this.state.rate}
              />
            </Item>
          </Form>
          <Button block light style={{marginLeft: 20, marginRight: 20, marginTop: 20}} onPress={this.onSubmit}>
            <Text>Submit</Text>
          </Button>
        </Content>
    </Container>
    )
  }
}

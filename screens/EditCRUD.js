import React ,{ Component } from 'react';
import {View, Text} from 'react-native';
import axios from 'axios'

import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


export default class EditCRUD extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          itemId: '',  
          namahotel: '',
          rate: '',
          Alamat: '',
          Phone: '',
          Klaster: '',
          username: '',
          users:[]
        };
      }

      componentDidMount(){
        axios.get('http://192.168.1.37:5000/exercises/'+this.props.route.params.itemId)
        .then(response => {
            this.setState({
                namahotel: response.data.namahotel,
                Alamat: response.data.alamathotel,
                rate: response.data.rating,
                Phone: response.data.phone,
                Klaster: response.data.klaster
            })
        })
        .catch((error) => {
            console.log(error);
        })
      }
      onSubmit = () => {
        
        const exercises = {
          // username: this.state.username,
          namahotel: this.state.namahotel,
          alamathotel: this.state.Alamat,
          rating: this.state.rate,
          phone: this.state.Phone,
          klaster: this.state.Klaster 
        }

        console.log(' Test ', exercises)
        axios.post('http://192.168.1.39:5000/exercises/update/'+this.props.route.params.itemId, exercises)
        .then(res => 
          console.log(res.data)
        )
        this.props.navigation.navigate('DataCRUD')
      }

  render() {
      console.log(this.props.route.params.itemId)
    // const { navigation } = this.props;
    // console.log("Ini ", this.state.namahotel)
    // console.log('ini ID ',itemId)
    return(
    <Container>
        <Header>
            <Text style={{marginTop: 13, fontSize: 30}}> EDIT HOTEL </Text>
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

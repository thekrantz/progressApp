import React ,{ Component } from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import axios from 'axios'

import { Container, Header, Content, Form, Item, Input, Button, SwipeRow } from 'native-base';

import { ListItem} from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view'




export default class DataCRUD extends Component {
    constructor(props) {
        super(props);
            this.state = {
                hotel: []
            }
      }

    componentDidMount(){
        axios.get('http://192.168.1.37:5000/exercises/')
            .then(response => {
                const hotel = response.data;
                this.setState({hotel})
                console.log(hotel)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    keyExtractor = (item, index) => index.toString()
    // renderItem = ({ item }) => (
        
    // )

    // renderItem = ({ item }) => {
    //     const text = `${item.namahotel}`
    //     const addres = `${item.alamathotel}`;
    //     // const rate = `${item.rating}`
    //     console.log('skrtyy ', addres)
    //     return (
    //       <TouchableOpacity onPress={() => Alert.alert('Alamat ',{addres})}>
    //         <Text  style={{ width: "100%", height: 30, backgroundColor: "white", fontSize: 20 }}>
    //             {text} 
    //         </Text>
    //         <Text  style={{ width: "100%", height: 30, backgroundColor: "white", fontSize: 15 }}>
    //             {addres} 
    //         </Text>
    //         <View style={{ width: "100%", height: 1, backgroundColor: "gray" }} />
    //       </TouchableOpacity>
    //     );
    //   };

    render(){
        return(
        
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Daftar Hotel </Text>
          </View>
            <SwipeListView
              data={this.state.hotel}
              renderItem={({item}) => (
                <TouchableHighlight
                  onPress={() => console.log('You touched me')}
                  style={styles.rowFront}
                  underlayColor={'#EEEEEE'}
                >
                  <View>
                      <Text>{item.namahotel}</Text>
                  </View>
                </TouchableHighlight>
               )}
              renderHiddenItem={ (data, rowMap) => (
                <View style={styles.rowBack}>
                  <Text>Left</Text>
                  <TouchableOpacity
                      style={[styles.backRightBtn, styles.backRightBtnLeft]}
                      onPress={() => closeRow(rowMap, data.item.key)}
                  >
                      <Text style={styles.backTextWhite}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.backRightBtn, styles.backRightBtnRight]}
                      onPress={() => deleteRow(rowMap, data.item.key)}
                  >
                      <Text style={styles.backTextWhite}>Delete</Text>
                  </TouchableOpacity>
                </View> 
              )}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
           />
           
          </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      marginTop: 20,
         flex: 1,
    },
    txtHeader: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color:'#fff'
    },
    header: {
      marginTop:-20,
      height:60,
      backgroundColor:'brown',
      justifyContent:'center',
      alignItems:'center'
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginBottom: -10,
        paddingTop: 5
        
      },
      ratingImage: {
        height: 19.21,
        width: 100
      },
      ratingText: {
        paddingLeft: 2,
        color: 'grey'
      },

      backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
  });
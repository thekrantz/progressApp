import React ,{ Component } from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight, Modal, Alert, Button} from 'react-native';
import axios from 'axios'

import { Container, Header, Content, Form, Item, Input,  SwipeRow } from 'native-base';

import { ListItem} from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view'





export default class DataCRUD extends Component {
    constructor(props) {
        super(props);
            this.state = {
                hotel: [],
                modalVisible: false,
            }
      }
     

      componentDidMount(){
        axios.get('http://192.168.1.39:5000/exercises/')
            .then(response => {
                const hotel = response.data;
                this.setState({hotel})
                console.log(hotel)
            })
            .catch((error) => {
                console.log(error);
            })
    }

      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }

    getdata(){
      axios.get('http://192.168.1.39:5000/exercises/')
            .then(response => {
                const hotel = response.data;
                this.setState({hotel})
                console.log(hotel)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    componentDidUpdate(){
      this.getdata();
    }

    deleteHotel(id){
      Alert.alert(
        "WARNING",
        "Are You Sure Want Delete This Data ?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => { 
            axios.delete(`http://192.168.1.39:5000/exercises/${id}`)
            .then(res => {
              console.log(res);
              console.log(res.data);
        
              // const hotel = this.state.hotel.filter(item => item.id !== id);
              // this.setState({ hotel });
              this.getdata()
            })
      
          } 
        }
        ],
        { cancelable: false }
      );
     
    }

    // componentDidUpdate(prevPros, prevState){
    //   if (prevState.hotel !== this.state.hotel){
    //     console.log('Ada Perubahan')

    //   }
    // }

    

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

        const { modalVisible } = this.state;
        return(
        
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Daftar Hotel </Text>
          </View>
            <SwipeListView
              keyExtractor={this.keyExtractor}
              data={this.state.hotel}
              renderItem={({item}) => (
                <TouchableHighlight
                onPress={() => {
                  console.log("ID ", item._id)
                  this.setModalVisible(true);
                 }}
                  style={styles.rowFront}
                  underlayColor={'#EEEEEE'}
                >
                  <View>
                      <Text>{item.namahotel}</Text>
                       {/* Modal */}  
                        <Modal
                          animationType="slide"
                          transparent={true}
                          visible={modalVisible}
                          onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                          }}
                        >
                          <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                              <Text style={styles.modalText}>Alamat : {item.alamathotel} {}</Text>

                              <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                  this.setModalVisible(!modalVisible);
                                }}
                              >
                                <Text style={styles.textStyle}>Close</Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </Modal>
                  </View>
                  
                </TouchableHighlight>
                
               )}
              renderHiddenItem={ ({item}) => (
                <View style={styles.rowBack}>
                  <Text>Left</Text>
                  <TouchableOpacity
                      style={[styles.backRightBtn, styles.backRightBtnLeft]}
                      onPress={() => this.props.navigation.navigate('EditCRUD',{
                        itemId:item._id
                      } )}
                  >
                      <Text style={styles.backTextWhite}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.backRightBtn, styles.backRightBtnRight]}
                      onPress={() =>this.deleteHotel(item._id)}
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
              {/* <Button
                title={"Refresh"}
                onPress={() => { this.getdata() }}
              /> */}
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
        color: '#000',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
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
        backgroundColor: '#efefef',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: '#e5e5e5',
        right: 0,
    },

    // Modal
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
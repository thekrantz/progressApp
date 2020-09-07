import React ,{ Component } from 'react';
import {View, Text,  StyleSheet, TouchableOpacity, TouchableHighlight,Alert} from 'react-native';
import axios from 'axios'
import { SwipeListView } from 'react-native-swipe-list-view'


export default class DataCRUD extends Component {
    constructor(props) {
        super(props);
            this.state = {
               
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
        
              
              this.getdata()
            })
      
          } 
        }
        ],
        { cancelable: false }
      );
     
    }

   

    

    keyExtractor = (item, index) => index.toString()
   

    render(){

        const { modalVisible } = this.state;
        return(
        
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> List Hotel </Text>
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
                  <View style={styles.textData}>
                      <Text style={styles.textTitle}>{item.namahotel}</Text>
                      <Text style={styles.textDesc}>{item.alamathotel}</Text>
                      <Text style={styles.textDesc}>{item.klaster}</Text>
                      <Text style={styles.textDesc}>{item.phone}</Text>
                      <Text style={styles.textDesc}>{item.rating}</Text>
                  </View>
                  
                </TouchableHighlight>
                
               )}
              renderHiddenItem={ ({item}) => (
                <View style={styles.rowBack}>
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
    textData: {
      marginLeft: 10,
    },
    textTitle: {
      fontSize:20,
      fontWeight:"bold"
    },
    textDesc:{
      marginLeft: 5,
      color: "#999999"
    },

    container: {
      backgroundColor: 'white',
      marginTop: 20,
         flex: 1,
    },
    txtHeader: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      color:'#fff'
    },
    header: {
      marginTop:-20,
      height:60,
      backgroundColor:'#e68a00',
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
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 110,
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
        backgroundColor: '#ffe0b3',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: '#fff5e6',
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
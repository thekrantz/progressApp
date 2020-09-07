import React, { Component } from 'react';
import {
    View, Text, StyleSheet, ScrollView, ImageBackground, Image
} from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem,DrawerItemList } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { Drawer, Avatar, Title, Caption } from 'react-native-paper';
import { Icon } from 'native-base'


export default class CustomDrawerContent extends Component {
    render() {
      return(
            <View style={{flex: 1}}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.drawerContent}>
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <Avatar.Image style={{marginLeft:10}}
                            source={require('../assets/image/char.jpg')}
                            size={50} 
                            />
                            <View style={{marginLeft:10,
                            flexDirection: 'column'}}>
                                <Title style> Muh Fauzan Shiddiq</Title>
                                <Caption> @mhmmdfzns </Caption>
                            </View>
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem icon={({color,size}) =>(
                                <Icon style={{ fontSize: 16 }} type="Entypo" name="home" size={2}/>
                                )}
                                label="Home"
                                onPress={() => this.props.navigation.navigate('Home')}
                            />
                            <DrawerItem icon={({color,size}) =>(
                                <Icon style={{ fontSize: 16 }} type="Ionicons" name="logo-react" size={2}/>
                                )}
                                label="Sensor"
                                onPress={() => this.props.navigation.navigate('Sensor')}
                            />
                             <DrawerItem icon={({color,size}) =>(
                                <Icon style={{ fontSize: 16 }} type="Ionicons" name="create" size={2}/>
                                )}
                                label="CRUD"
                                onPress={() => this.props.navigation.navigate('CRUD')}
                            />
                            <DrawerItem icon={({color,size}) =>(
                                <Icon style={{ fontSize: 16 }} type="Entypo" name="list" size={2}/>
                                )}
                                label="DataCRUD"
                                onPress={() => this.props.navigation.navigate('DataCRUD')}
                            />
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    
                </Drawer.Section>
            </View>
      )
    }
  }

  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
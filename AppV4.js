import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Dimensions } from 'react-native'


import {
  ProfileScreen,
  SensorScreen,
  CRUDScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SignOutScreen,
} from './screens';

// import {SensorScreen} from './screens/SensorScreen'

import SideBar from './components/SideBar'
import { Icon } from 'native-base';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen :{
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        drawerIcon: ({ tintColor }) => <Icon style={{ fontSize: 16 }} type="Feather" name="user" size={2} color={tintColor}/>
      }
  },
  SensorScreen :{
      screen: SensorScreen,
      navigationOptions: {
          title: "Sensor",
          drawerIcon: ({ tintColor }) => <Icon style={{ fontSize: 16 }} type="Ionicons" name="logo-react" size={2} color={tintColor}/>
  }
},
  CRUDScreen: {
      screen: CRUDScreen,
      navigationOptions: {
          title: "CRUD",
          drawerIcon: ({ tintColor }) => <Icon style={{ fontSize: 16 }} type="MaterialCommunityIcons" name="motion-sensor" size={2} color={tintColor}/>
  }
},
  ListScreen: {
      screen: ListScreen,
      navigationOptions: {
        title: "List",
        drawerIcon: ({ tintColor }) => <Icon style={{ fontSize: 16 }} type="Feather" name="list" size={2} color={tintColor}/>
  }
},
  ReportScreen:
  {
    screen: ReportScreen,
      navigationOptions: {
        title: "Report",
        drawerIcon: ({ tintColor }) => <Icon style={{ fontSize: 16 }} type="MaterialIcons" name="report" size={2} color={tintColor}/>
  }
},
  StatisticScreen:{
    screen: StatisticScreen,
      navigationOptions: {
        title: "Statistic",
        drawerIcon: ({ tintColor }) => <Icon style={{ fontSize: 16 }} type="Entypo" name="bar-graph" size={2} color={tintColor}/>
  }
},
  SignOutScreen: 
  {
    screen: SignOutScreen,
      navigationOptions: {
        title: "SignOut",
        drawerIcon: ({ tintColor }) => <Icon style={{ fontSize: 16 }} type="Feather" name="power" size={2} color={tintColor}/>
  }
},
},{
  contentComponent: props => <SideBar {...props} />
})

export default createAppContainer(DrawerNavigator);
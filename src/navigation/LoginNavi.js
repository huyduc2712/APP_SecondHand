
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../containers/screen/Splash';
import Login from '../containers/screen/Login';
import Onboarding from '../containers/screen/Onboarding';
import BottomNavi from './BottomNavi';
import Detail from '../containers/screen/Detail';
import Update from '../containers/screen/Update'
import OnSale from '../containers/screen/OnSale';
const Stack = createStackNavigator();


const LoginNavi = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomNavi" component={BottomNavi} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="OnSale" component={OnSale} />
      <Stack.Screen name="Update" component={Update} />
      
    </Stack.Navigator>
  )
}

export default LoginNavi
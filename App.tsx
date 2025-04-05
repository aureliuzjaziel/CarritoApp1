import React from 'react'
import 'react-native-gesture-handler';
import { View } from 'react-native'
import { LoginScreen } from './src/screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigator/StackNavigato';

const App = () => {
  return (
    <NavigationContainer>
    
      <StackNavigator/>
    
    </NavigationContainer>
  )
}

export default App;


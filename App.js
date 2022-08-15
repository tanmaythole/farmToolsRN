import { StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AuthStack />
      {/* <Navigation /> */}
    </NavigationContainer>
  )
}

export default App;
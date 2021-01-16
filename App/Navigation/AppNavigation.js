import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppConstants from '../Constants/AppConstants'
import HomeScreen from '../Containers/HomeScreen'
import { navigationRef } from '../Services/NavigationService'
import styles from './Styles/NavigationStyles'

const Stack = createStackNavigator()
export const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={AppConstants.NAVIGATIONS.SCREENS.HOME_SCREEN}>
        <Stack.Screen
          name={AppConstants.NAVIGATIONS.SCREENS.HOME_SCREEN}
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyle: styles.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
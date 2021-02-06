import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppConstants from '../Constants/AppConstants'
import HomeScreen from '../Containers/HomeScreen'
import { navigationRef } from '../Services/NavigationService'
import styles from './Styles/NavigationStyles'
import AlbumDetailsScreen from '../Containers/AlbumDetailsScreen'

const Stack = createStackNavigator()
export const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={AppConstants.NAVIGATIONS.SCREENS.HOME_SCREEN}>
        <Stack.Screen
          name={AppConstants.NAVIGATIONS.SCREENS.HOME_SCREEN}
          component={HomeScreen}
          options={{
            headerStyle: styles.header,
          }}
        />
         <Stack.Screen
          name={AppConstants.NAVIGATIONS.SCREENS.ALBUM_DETAILS_SCREEN}
          component={AlbumDetailsScreen}
          options={{
            headerStyle: styles.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
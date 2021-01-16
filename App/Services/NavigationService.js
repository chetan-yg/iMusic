

import * as React from 'react'
import { CommonActions } from '@react-navigation/native'

export const navigationRef = React.createRef()

export function navigateWithoutNav(name, params = {}) {
  navigationRef.current?.navigate(name, params)
}

export function resetAndNavigateWithoutNav(name, params = {}) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: name,
          params,
        },
      ],
    })
  )
}

export function navigate(navigation, name, params = {}) {
  navigation.navigate(name, params)
}

export function resetAndNavigate(navigation, name, params = {}) {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: name,
          params,
        },
      ],
    })
  )
}

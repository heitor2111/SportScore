import { type NavigationProp, type RouteConfig, type StackNavigationState } from '@react-navigation/native'
import { type NativeStackNavigationEventMap, type NativeStackNavigationOptions } from '@react-navigation/native-stack'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ScreenListType = {
  Home: undefined
  Groups: undefined
}

export type Screen = RouteConfig<ScreenListType, keyof ScreenListType, StackNavigationState<ScreenListType>, NativeStackNavigationOptions, NativeStackNavigationEventMap>

export type ScreenList = Screen[]

export type MainNavigation = NavigationProp<ScreenListType>

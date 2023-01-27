import { type ParamListBase, type RouteConfig, type StackNavigationState } from '@react-navigation/native'
import { type NativeStackNavigationEventMap, type NativeStackNavigationOptions } from '@react-navigation/native-stack'

export type Screen = RouteConfig<ParamListBase, string, StackNavigationState<ParamListBase>, NativeStackNavigationOptions, NativeStackNavigationEventMap>

export type ScreenList = Screen[]

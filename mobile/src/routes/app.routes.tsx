import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Game } from '../screens/Game'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ animation: 'fade_from_bottom', headerShown: false }}>
      <Screen name='home' component={Home}/>
      <Screen name='game' component={Game}/>
    </Navigator>
  )
}
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import LaunchScreen from '../screens/LaunchScreen'
import MainScreen from '../screens/MainScreen'

const Stack = createStackNavigator()

export default function MainNavigation() {
  const navigation = (
    <Stack.Navigator initialRouteName="LaunchScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LaunchScreen"
        component={LaunchScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          headerLeft: () => null,
          // animationEnabled: true,
          // gestureDirection: 'horizontal',
          // gestureEnabled: true,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="MainScreen"
        component={MainScreen}
      />
    </Stack.Navigator>
  )

  return <>{navigation}</>
}

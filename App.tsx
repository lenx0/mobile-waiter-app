import { useFonts } from 'expo-font'
import { Main } from './src/Main'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/pages/LoginScreen'
import 'react-native-gesture-handler';


export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
  })

  if (!isFontsLoaded) {
    return null
  }

  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* <StatusBar style='dark' /> */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Página inicial" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

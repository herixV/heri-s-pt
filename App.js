import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Inicio from './src/components/pages/Inicio';
import Peliculas from './src/components/pages/Peliculas';
import Series from './src/components/pages/Series';



const Stack  = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" options={{headerShown: false}} component={Inicio} />
        <Stack.Screen name="Peliculas" options={{headerShown: false}} component={Peliculas} />
        <Stack.Screen name="Series" options={{headerShown: false}} component={Series} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


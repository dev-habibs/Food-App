import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PreOrder from './Screens/PreOrder';
import Rating from './Screens/Rating';
import FoodAppBackground from './Screens/Background';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
     <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='FoodAppBackground' component={FoodAppBackground} />
          <Stack.Screen options={{headerShown: false}} name='Home' component={Home} />
          <Stack.Screen options={{headerShown: false}} name='PreOrder' component={PreOrder} />
          <Stack.Screen options={{headerShown: false}} name='Rating' component={Rating} />
        </Stack.Navigator>
     </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import  React from 'react';
import { View, Text,Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { Provider as BlogProvider } from './src/context/BlogProvider';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import {Feather} from '@expo/vector-icons'
import { HeaderRight } from './src/screens/ShowScreen';

const Stack = createNativeStackNavigator();

function AppSecondary() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index"
       
      >
        <Stack.Screen name="Index"
         component={IndexScreen}
         options={({ navigation, route }) => ({
         
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
              <Feather name='plus' size={30}/>
            </TouchableOpacity>
          ),
        })}
        />
        <Stack.Screen name='Show' component={ShowScreen}
         
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App =()=>{
  return (<BlogProvider>
    <AppSecondary/>
  </BlogProvider>)
}

export default App;
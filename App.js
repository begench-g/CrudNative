import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { Provider as BlogProvider } from './src/context/BlogProvider';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

IndexScreen.navigationOptions = ({navigation})=>{
  return{
    headerRight:(
      <Text>hione</Text>
    )
  }
}

const Stack = createNativeStackNavigator();

function AppSecondary() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index"
         screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
      >
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name='Show' component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
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
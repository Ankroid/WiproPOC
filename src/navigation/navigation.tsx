import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Startup from '../screens/Startup';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="startUp"
          options={{headerShown: false}}
          component={Startup}
        />
         <Stack.Screen
          name="home"
          options={{headerShown: true, title:"HOME"}}
          
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './pages/Details';
import Incidents from './pages/Incidents';

const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="stack_incidents"
        >
            <Stack.Screen name="stack_incidents" component={Incidents} />
            <Stack.Screen name="stack_details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;

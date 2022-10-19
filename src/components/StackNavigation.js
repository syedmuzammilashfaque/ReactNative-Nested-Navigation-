import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialBottom from './MaterialBottom';
import SideNavigation from './SideNavigation';
import Splash from "../screens/Spalsh";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    const [showSplashScreen, setShowSplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplashScreen(false);
        }, 4000)
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {showSplashScreen
                    ?
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    : null}
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="SideNavigation" component={SideNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default StackNavigation;


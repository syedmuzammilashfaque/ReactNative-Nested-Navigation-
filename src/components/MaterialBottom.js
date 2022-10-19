import React from 'react';
import IconicIcons from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "../screens/Home";
import About from "../screens/About";
import Services from "../screens/Services";
import Contact from "../screens/Contact";

const Tab = createMaterialBottomTabNavigator();

const MaterialBottom = () => {

    return (

        <Tab.Navigator activeColor='#000' barStyle={{ backgroundColor: "#fff" }} shifting={true}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: () => <IconContainer name="home" />
                }}
            />
            <Tab.Screen name="About" component={About}
                options={{
                    tabBarIcon: () => <IconContainer name="person" />
                }}
            />
            <Tab.Screen name="Services" component={Services}
                options={{
                    tabBarIcon: () => <IconContainer name="browsers" />
                }} />
            <Tab.Screen name="Contact" component={Contact}
                options={{
                    tabBarIcon: () => <IconContainer name="call" />
                }} />
        </Tab.Navigator>
    )
}


const IconContainer = props => {
    return <IconicIcons name={props.name} size={20} color={"#000"} />
};


export default MaterialBottom;
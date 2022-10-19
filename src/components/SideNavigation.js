import React from 'react';
import Home from "../screens/Home";
import About from "../screens/About";
import Services from "../screens/Services";
import Contact from "../screens/Contact";
import Admin from "../screens/Admin";
import User from "../screens/User";
import IconicIcons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialBottom from "../components/MaterialBottom";

const Drawer = createDrawerNavigator();

const SideNavigation = () => {

    return (
        <Drawer.Navigator initialRouteName='Home'>

            <Drawer.Screen name="MaterialBottom" component={MaterialBottom}
                options={{
                    drawerIcon: () => {
                        return <IconicIcons size={20} name="home" />
                    },
                }}

            />

            <Drawer.Screen name="About" component={About}
                options={{
                    drawerIcon: () => {
                        return <IconicIcons size={20} name="person" />
                    },
                }}

            />

            <Drawer.Screen name="Services" component={Services}
                options={{
                    drawerIcon: () => {
                        return <IconicIcons size={20} name="browsers" />
                    },
                }}

            />

            <Drawer.Screen name="Contact" component={Contact}
                options={{
                    drawerIcon: () => {
                        return <IconicIcons size={20} name="call" />
                    },
                }}

            />

            <Drawer.Screen name="User" component={User}
                options={{
                    drawerIcon: () => {
                        return <IconicIcons size={20} name="people" />
                    },
                }}

            />

            <Drawer.Screen name="Admin" component={Admin}
                options={{
                    drawerIcon: () => {
                        return <IconicIcons size={20} name="baseball" />
                    },
                }}
            />

        </Drawer.Navigator>
    )
};

export default SideNavigation;

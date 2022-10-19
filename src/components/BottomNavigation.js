// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from "../screens/Home";
// import About from "../screens/About";
// import Services from "../screens/Services";
// import Contact from "../screens/Contact";
// import IconicIcons from "react-native-vector-icons/Ionicons";
// const BottomNavigation = () => {

//     const Tab = createBottomTabNavigator();

//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={Home}
//                 options={{
//                     tabBarIcon: () => {
//                         return <IconicIcons size={20} name="home" />
//                     },
//                 }}
//             />
//             <Tab.Screen name="About" component={About}
//                 options={{
//                     tabBarIcon: () => {
//                         return <IconicIcons size={20} name="person" />
//                     },
//                 }}
//             />
//             <Tab.Screen name="Services" component={Services}
//                 options={{
//                     tabBarIcon: () => {
//                         return <IconicIcons size={20} name="browsers" />
//                     },
//                 }} />
//             <Tab.Screen name="Contact" component={Contact}
//                 options={{
//                     tabBarIcon: () => {
//                         return <IconicIcons size={20} name="call" />
//                     },
//                 }} />
//         </Tab.Navigator>
//     )
// }

// export default BottomNavigation;
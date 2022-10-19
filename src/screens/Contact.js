import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Contact = () => {

    const [isPasswordVisible, setIsPassswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contact US</Text>

            <View style={styles.inputBoxContainer}>
                <Ionicons name="mail" size={20} />
                <TextInput style={styles.inputBox}
                    placeholder="Enter Your Email"
                />
            </View>

            {/*  */}
            <View style={styles.inputBoxContainer}>
                <FontAwesome name="lock" size={20} />
                <TextInput style={styles.inputBox}
                    placeholder="Enter Your Password"
                    secureTextEntry={isPasswordVisible ? false : true}
                />
                <TouchableOpacity onPress={() => setIsPassswordVisible(!isPasswordVisible)}>
                    <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={20} />
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    heading: {
        marginVertical: 20,
        color: "#000",
        fontSize: 40,
        fontWeight: 'bold',
    },

    inputBoxContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        width: '90%',
        borderColor: "#33d"
    },

    inputBox: {
        marginHorizontal: 10,
        flex: 1,
    },


});
export default Contact;
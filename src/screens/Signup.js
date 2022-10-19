import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Signup = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Old User ? got to </Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },

    btn: {
        alignItems: "center",
        textAlign: "center",
        marginVertical: 30,
        borderRadius: 4,
        width: 200,
        padding: 10,
        backgroundColor: "blue",
    },

    btnTxt: {
        fontSize: 15,
        color: "#fff",
    },
});

export default Signup;
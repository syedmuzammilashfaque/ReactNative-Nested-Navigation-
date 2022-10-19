import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

const Spalsh = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidded={true} />
            <View style={styles.childContainer}>
                <Image style={styles.logo} source={require("../../assets/images/myImg.jpg")} />
                <Text style={styles.txt}>
                    𝑀𝓊𝓏𝒶𝓂𝓂𝒾𝓁 𝒜𝓈𝒽𝒻𝒶𝓆𝓊𝑒
                </Text>
            </View>

            <View style={styles.desContainer}>
                <Text style={styles.txtDes}>
                    A passionate Full Stack Software Engineer 🚀 having an experience of building Web applications with JavaScript / ReactJs / NodeJs / MongoDB / Express.Js and some other cool libraries and frameworks.
                </Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },

    childContainer: {
        alignItems: "center",
    },

    desContainer: {
        alignItems: "center",
    },

    txtDes: {
        letterSpacing: 1,
        marginHorizontal: 20,
        color: "#000",
        fontSize: 14,
    },

    logo: {
        height: 200,
        width: 200,
    },

    txt: {
        letterSpacing: 2,
        marginVertical: 30,
        fontSize: 25,
        color: "bluer",
    },
});
export default Spalsh;
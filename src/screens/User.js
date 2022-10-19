import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const User = () => {
    return (
        <View style={styles.container}>
            <Text>User</Text>
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
});
export default User;
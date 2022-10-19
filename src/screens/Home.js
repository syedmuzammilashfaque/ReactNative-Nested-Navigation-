import React, { useEffect, useState } from 'react';
// import { WebView } from 'react-native-webview';
import { View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
// import ProgressBar from 'react-native-progress/Bar';
// import AsyncStorage from '@react-native-async-storage/async-storage';



const Home = () => {

    // const [inputBoxValue, setInputBoxValue] = useState('');
    // const [storageDataList, setStorageDataList] = useState([]);

    // const addItemList = async () => {
    //     try {
    //         await AsyncStorage.setItem("itemList", inputBoxValue);
    //         setInputBoxValue('');

    //         await getItemList();

    //         alert("data is added");

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const getItemList = async () => {
    //     try {

    //         const data = await AsyncStorage.getItem("itemList")
    //         setStorageDataList(data);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const [progress, setProgress] = useState(0);
    // const [isLoaded, setIsLoaded] = useState(false);

    const [isRotate, setIsRotate] = useState(false);


    useEffect(() => {
        Dimensions.addEventListener('change', () => {
            const orientation = isPotrait();

            setIsRotate(orientation);
        });

    }, []);


    const isPotrait = () => {
        const { height, width } = Dimensions.get('screen');

        return height > width ? "false" : "true"
    };



    return (
        <View style={[styles.container, style = {
            flexDirection: isRotate ? "row" : "column",
        }]}>
            {/* {!isLoaded ? <ProgressBar progress={progress} width={350} /> : null} */}
            {/* <WebView
                source={{ uri: 'https://syed-muz.web.app/' }} onError={(event) => {
                    // console.log("this url is in-correct")
                    alert(`The link is in correct ${event.nativeEvent.description}`)
                }}
                onLoadProgress={(event) => setProgress(event.nativeEvent.progress)}
                onLoadEnd={() => setIsLoaded(true)}
            /> */}

            {/* <Text>Home Page</Text>
            <TextInput style={styles.inputBox}
                value={inputBoxValue}
                placeholder="Enter data"
                onChangeText={value => setInputBoxValue(value)}
            />

            <TouchableOpacity style={styles.btn}
                onPress={() => addItemList()}
            >
                <Text style={styles.btnTxt}>Input Name</Text>
            </TouchableOpacity>

            <Text>Your data is {storageDataList}</Text> */}

            <View style={styles.fristView}>
                <Text style={styles.txt}>first view</Text>
            </View>
            <View style={styles.secondView}>
                <Text style={styles.txt}>second view</Text>
            </View>
            <View style={styles.thirdView}>
                <Text style={styles.txt}>third view</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },

    fristView: {
        backgroundColor: "red",
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },

    secondView: {
        width: "100%",
        flex: 1,
        height: "100%",
        backgroundColor: "yellow",
        justifyContent: "center",
    },

    thirdView: {
        width: "100%",
        flex: 1,
        height: "100%",
        backgroundColor: "green",
        justifyContent: "center",
    },

    txt: {
        textAlign: "center",
        color: "#fff",
    },


    // inputBox: {
    //     width: 280,
    //     borderWidth: 2,
    //     borderColor: "#d3d3d3",
    //     marginVertical: 10,
    //     paddingVertical: 10,
    //     paddingHorizontal: 10,
    //     borderRadius: 5,
    // },

    // btn: {
    //     borderRadius: 5,
    //     marginVertical: 10,
    //     paddingVertical: 10,
    //     paddingHorizontal: 10,
    //     backgroundColor: "blue",
    //     width: "80%",
    // },

    // btnTxt: {
    //     textAlign: "center",
    //     fontSize: 20,
    //     color: "#fff",
    // },

});

export default Home;

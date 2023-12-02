import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
const category = ({ title, path, selected }) => {
    return (
        <View style={(selected)?styles.selectedcontainer:styles.container}>
            <View style={{flex: 1,justifyContent: "center", alignItems: 'center'}}>
                <Image source={path} style={styles.imageContainer} />
                <Text style={(selected)?{ fontSize: 15, fontWeight: 'bold',padding: 5, color:'black' }:{ fontSize: 15, fontWeight: 'bold',padding: 5, color:'grey' }}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        width: 100,
        borderWidth: 2,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.80,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        borderColor: 'grey'


    },
    selectedcontainer: {
        height: 110,
        width: 100,
        borderWidth: 2,
        backgroundColor: 'orange',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.80,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        borderColor: 'grey'


    },
    imageContainer: {
        height: 60,
        width: 60
    }
})

export default category
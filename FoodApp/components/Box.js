import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
const Box = ({path, title, selected}) => {
    return (
        <View style={(selected)?styles.selectedcontainer:styles.container}>
            <View style={{flex: 1,justifyContent: "center", alignItems: 'center'}}>
                {title ? <Text style={(selected)?{ fontSize: 17, fontWeight: 'bold',padding: 5, color:'white' }:{fontSize: 17, fontWeight: 'bold',padding: 5, color:'black' }}>{title}</Text>:<Image source={path} style={styles.imageContainer} />}
                
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        borderWidth: 1,
        backgroundColor: '#fff',
        shadowColor: '#ababab',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.80,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        borderColor: '#fff'


    },
    selectedcontainer: {
        height: 40,
        width: 40,
        borderWidth: 1,
        backgroundColor: 'orange',
        shadowColor: '#ababab',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.80,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        borderColor: 'orange'


    },
    imageContainer: {
        height: 25,
        width: 25
    }
})

export default Box
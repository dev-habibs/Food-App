import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native'

const { height, width } = Dimensions.get('screen')
const FoodCard = ({title , path , price, type}) => {

    return (
        <View style={styles.maincontainer}>
            <View style={styles.imageConatiner}>
                <Image style={{ height: height * 0.25, width: width * 0.5 }} source={path} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 10, paddingVertical: 3 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#D27D2D' }}>{price}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey' }}>{type}</Text>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {

        height: height * 0.30,
        width: width * 0.92,
        borderWidth: 1,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.80,
        shadowRadius: 3,
        elevation: 5,
        borderRadius: 10,
        borderColor: '#D3D3D3',
        marginVertical: 10,
      



    },
    imageConatiner: {
        height: height * 0.22,
        width: width * 0.86,
        backgroundColor: '#D27D2D',
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
export default FoodCard
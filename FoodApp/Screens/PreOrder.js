import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Box from "../components/Box";
import Animated, { Easing, Value, timing } from 'react-native-reanimated';

const PreOrder = ({ navigation }) => {
    const [count, setCount] = useState(0)
  
  
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginHorizontal: 15, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Box path={require('../assets/left.png')} />
                    </TouchableOpacity>

                    <Box path={require('../assets/heartt.png')} />
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 35 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: 10 }}>The Ultimate Cheesy Splash Burger</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey', textAlign: 'center' }}>Delicious combo Grilled chicken patty topped with smoked beef</Text>

                </View>
                <View style={styles.roundshadow}>
                    <View style={styles.shadowContainer}>
                        <Image style={styles.imagestyling} source={require('../assets/wepik-export-202310111339328H96.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Box path={require('../assets/left.png')} title='S' />
                            <Box path={require('../assets/heartt.png')} title='L' />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Box path={require('../assets/heartt.png')} title='M' selected={true} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', margin: 40 }}>
                    <TouchableOpacity onPress={() => setCount(count + 1)} style={{ height: 35, width: 35, borderRadius: 100, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 17, width: 17 }} source={require('../assets/add.png')} />
                    </TouchableOpacity>
                    <Text>{count}</Text>
                    <TouchableOpacity onPress={() => setCount(count ? count - 1 : count)} style={{ height: 35, width: 35, borderRadius: 100, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 17, width: 17 }} source={require('../assets/minus-sign.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <View style={{ width: 150, height: 40 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey' }}>Price</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{count * 12.46}</Text>
                    </View>
                    <TouchableOpacity style={{ width: 150, height: 60, backgroundColor: 'orange', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Rating')}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Place Order</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS == 'android' ? 30 : 0 
    },
    roundshadow: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadowContainer: {
        backgroundColor: '#f4f4f4',
        height: 400,
        width: 400,
        borderRadius: 300,
        justifyContent: 'center',

    },
    imagestyling: {
        height: 270,
        width: 320,
        alignSelf: 'center',
        marginTop: 70
    }
})
export default PreOrder
import React from "react";
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
const Rating = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D27D2D', paddingTop: Platform.OS == 'android' ? 30 : 0  }}>

            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' , paddingTop: 20}}> Share Your Service Rating</Text>
            <View style={{ flex: 1 , justifyContent:'center'}}>
                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 50 }}> How was Your Food?</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <View style={{ height: 50, width: 50, backgroundColor: 'white', borderRadius: 100, justifyContent: 'center' }}>
                        <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../assets/thumbs-up.png')} />
                    </View>
                    <View style={{ height: 140, width: 140, backgroundColor: 'white', borderRadius: 100, justifyContent:'center' }}>
                    <Image style={{ height: 140, width: 100, alignSelf: 'center' }} source={require('../assets/wepik-export-202310111339328H96.png')} />
                    </View>
                    <View style={{ height: 50, width: 50, backgroundColor: 'white', borderRadius: 100, justifyContent:'center' }}>
                    <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../assets/dislike.png')} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent:'center'}}>
                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 50 }}> How was Your Delivery?</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <View style={{ height: 50, width: 50, backgroundColor: 'white', borderRadius: 100, justifyContent: 'center' }}>
                        <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../assets/thumbs-up.png')} />
                    </View>
                    
                    <Image style={{ height: 140, width: 140, alignSelf: 'center',  borderRadius: 100}} source={require('../assets/user3.jpg')} />
                    
                    <View style={{ height: 50, width: 50, backgroundColor: 'white', borderRadius: 100, justifyContent:'center' }}>
                    <Image style={{ height: 30, width: 30, alignSelf: 'center' }} source={require('../assets/dislike.png')} />
                    </View>
                </View>
            </View>


        </SafeAreaView>
    )
}

export default Rating
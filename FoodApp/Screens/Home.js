import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Dimensions, Platform, ImageBackground , Button} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Category from "../components/category";
import FoodCard from "../components/FoodCard";
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width

const Home = ({ navigation }) => {

    return (

        <SafeAreaView style={{ backgroundColor: '#fff', paddingTop: Platform.OS == 'android' ? 30 : 0 }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.topnaveStyling}>
                        <Image source={require('../assets/drawer.png')} style={styles.iconstyling} />
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#D27D2D' }}>BurgerLAB1</Text>
                        <Image source={require('../assets/user3.jpg')} style={[styles.iconstyling, { borderRadius: 100 }]} />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', }}>Hey Habib!</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey' }}>How can we serve you today?</Text>
                    </View>
                    <View style={styles.searchContainer}>
                        <Image source={require('../assets/loupe.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 15, color: 'grey', marginHorizontal: 10 }}>Discover our burgers</Text>
                    </View>

                    <View style={{
                        height: 180, width: 380, borderRadius: 100
                    }}>
                        <ImageBackground imageStyle={styles.imageStyle} style={styles.backgroundImage} source={require('../assets/84476.jpg')}>
                            <LinearGradient
                                style={styles.gradient}
                                colors={['transparent', 'transparent', 'black']}
                                start={{ x: 1.5, y:0 }}
                                end={{ x: 0, y: 0 }}
                            />
                            <View style={styles.content}>
                                <Text style={styles.text}>BreakFast Best </Text>
                                <Text style={styles.text}>Deals</Text>
                                <View style={{height: 30, width: 80 , backgroundColor: 'darkorange', alignItems: 'center', justifyContent:'center', borderRadius: 30, marginTop: 10}}>
                                <Text style={{color: 'white', fontSize: 13}}>40% OFF</Text>
                                </View>
                            </View>

                        </ImageBackground>
                    </View>




                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Popular</Text>
                        <Text style={{ fontSize: 15, color: 'orange' }}>View All</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('PreOrder')}>
                            <FoodCard title='The Ultimate Mighty Burger' price='$16.45' path={require('../assets/wepik-export-202310111339328H96.png')} type='Beef Burger' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('PreOrder')}>
                            <FoodCard title='The Crispy Ham Burger' price='$12.45' path={require('../assets/hamburger-removebg-preview.png')} type='Ham Burger' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('PreOrder')}>
                            <FoodCard title='The ulimate Zingereta' price='$10.45' path={require('../assets/zingereta.png')} type='Zinger Burger' />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15
    },
    topnaveStyling: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    iconstyling: {
        height: 40,
        width: 40
    },
    searchContainer: {
        marginVertical: 10,
        height: 45,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 50
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'contain' based on your requirements
        justifyContent: 'center',

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        padding: 15
        
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageStyle: {
        borderRadius: 15,
      },
})
export default Home
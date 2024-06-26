import React from "react";
import {StyleSheet, Text, View,Image, SafeAreaView,ScrollView } from 'react-native';
import { useTheme } from './theme'; 

export default function Statistics() {
    const { isDarkMode } = useTheme(); 
    return(
<SafeAreaView style={[styles.container , isDarkMode ? styles.darkMode : styles.lightMode]}>
    <Text  style={[styles.textMid , isDarkMode && styles.darkText]}> Nothing to see here </Text>
</SafeAreaView>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textMid:{
fontSize:40,
fontWeight:'bold',
    },
    lightMode: {
        backgroundColor: 'white',
      },
      darkMode: {
        backgroundColor: 'black',
      },
      darkText: {
        color: '#fff',
      },
});
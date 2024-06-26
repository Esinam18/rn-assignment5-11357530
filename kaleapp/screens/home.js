import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from './theme'; 

export default function Home() {
  const { isDarkMode } = useTheme(); 

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image style={styles.profilePic} source={require('../images/profile.png')} />
          <View>
            <Text style={[styles.welcome, isDarkMode && styles.darkText]}>Welcome back,</Text>
            <Text style={[styles.name, isDarkMode && styles.darkText]}>Eric Atsu</Text>
          </View>
          <Image style={styles.searchPic} source={require('../images/search.png')} />
        </View>

        <View style={styles.firstContainer}>
          <Image style={styles.firstImage} source={require('../images/Card.png')} />
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Image style={styles.buttonImages} source={require('../images/send.png')} />
            <Text style={[styles.buttonText, isDarkMode && styles.darkText]}>Send</Text>
          </View>
          <View style={styles.button}>
            <Image style={styles.buttonImages} source={require('../images/recieve.png')} />
            <Text style={[styles.buttonText, isDarkMode && styles.darkText]}>Recieve</Text>
          </View>
          <View style={styles.button}>
            <Image style={styles.buttonImages} source={require('../images/loan.png')} />
            <Text style={[styles.buttonText, isDarkMode && styles.darkText]}>Loan</Text>
          </View>
          <View style={styles.button}>
            <Image style={styles.buttonImages} source={require('../images/topUp.png')} />
            <Text style={[styles.buttonText, isDarkMode && styles.darkText]}>Topup</Text>
          </View>
        </View>

        <View style={styles.transHead}>
          <Text style={[styles.transText, isDarkMode && styles.darkText]}>Transaction</Text>
          <Text style={[styles.seeAll, isDarkMode && styles.darkText]}>See All</Text>
        </View>

        <View style={styles.transactionRow}>
          <Image style={styles.rowPics} source={require('../images/apple.png')} />
          <View style={styles.transactionDetails}>
            <Text style={[styles.Apple, isDarkMode && styles.darkText]}>Apple Store</Text>
            <Text style={[styles.Entertain, isDarkMode && styles.darkText]}>Entertainment</Text>
          </View>
          <Text style={[styles.amountText, isDarkMode && styles.darkText]}>- $5,99</Text>
        </View>

        <View style={styles.transactionRow}>
          <Image style={styles.rowPics} source={require('../images/spotify.png')} />
          <View style={styles.transactionDetails}>
            <Text style={[styles.Apple, isDarkMode && styles.darkText]}>Spotify</Text>
            <Text style={[styles.Entertain, isDarkMode && styles.darkText]}>Music</Text>
          </View>
          <Text style={[styles.amountText, isDarkMode && styles.darkText]}>- $12,99</Text>
        </View>

        <View style={styles.transactionRow}>
          <Image style={styles.rowPics} source={require('../images/moneyTransfer.png')} />
          <View style={styles.transactionDetails}>
            <Text style={[styles.Apple, isDarkMode && styles.darkText]}>Money Transfer</Text>
            <Text style={[styles.Entertain, isDarkMode && styles.darkText]}>Transaction</Text>
          </View>
          <Text style={[styles.amount, isDarkMode && styles.darkText]}>$300</Text>
        </View>

        <View style={styles.transactionRow}>
          <Image style={styles.rowPics} source={require('../images/grocery.png')} />
          <View style={styles.transactionDetails}>
            <Text style={[styles.Apple, isDarkMode && styles.darkText]}>Grocery</Text>
            <Text style={[styles.Entertain, isDarkMode && styles.darkText]}>Food</Text>
          </View>
          <Text style={[styles.amountText, isDarkMode && styles.darkText]}>- $88</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcome: {
    fontSize: 16,
    color: '#6c6c6c',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchPic: {
    width: 25,
    height: 25,
  },
  firstContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  firstImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
  },
  buttonImages: {
    width: 30,
    height: 30,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 14,
  },
  transHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#007AFF',
    fontSize: 16,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  rowPics: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  transactionDetails: {
    flex: 1,
  },
  Apple: {
    fontSize: 16,
  },
  Entertain: {
    fontSize: 14,
    color: '#6c6c6c',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from './theme'; 

export default function Settings() {
  const { isDarkMode, toggleTheme } = useTheme(); 

  return (
    <View style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Settings</Text>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Language</Text>
        <Text style={[styles.arrow, isDarkMode && styles.darkText]}>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>My Profile</Text>
        <Text style={[styles.arrow, isDarkMode && styles.darkText]}>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Contact Us</Text>
        <Text style={[styles.arrow, isDarkMode && styles.darkText]}>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Change Password</Text>
        <Text style={[styles.arrow, isDarkMode && styles.darkText]}>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Privacy Policy</Text>
        <Text style={[styles.arrow, isDarkMode && styles.darkText]}>{'>'}</Text>
      </TouchableOpacity>
      <View style={styles.themeContainer}>
        <Text style={[styles.themeText, isDarkMode && styles.darkText]}>Theme</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lightMode: {
    backgroundColor: 'white',
  },
  darkMode: {
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  darkText: {
    color: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
  },
  arrow: {
    fontSize: 18,
    color: '#ccc',
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  themeText: {
    fontSize: 18,
  },
});

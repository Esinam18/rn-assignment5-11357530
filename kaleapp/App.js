
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native';
import { ThemeProvider } from './screens/theme';

import Home from './screens/home'
import Cards from './screens/cards'
import Statistics from './screens/statistics'
import Settings from './screens/settings'

 
const Tab = createBottomTabNavigator();


export default function App() {
 return (
  <ThemeProvider>
   <NavigationContainer initialRouteName='Home'>
   
     <Tab.Navigator>
      <Tab.Screen name = "Home" component={Home}/>
      <Tab.Screen name = "Cards" component={Cards}/>
      <Tab.Screen name = "Statistics" component={Statistics}/>
      <Tab.Screen name = "Settings" component={Settings}/>
      </Tab.Navigator>
     
   </NavigationContainer>
   </ThemeProvider>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});

 
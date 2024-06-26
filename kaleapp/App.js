
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native';
import { ThemeProvider } from './screens/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './screens/home'
import Card from './screens/cards'
import Statistics from './screens/statistics'
import Settings from './screens/settings'
import { Colors } from 'react-native/Libraries/NewAppScreen';

 
const Tab = createBottomTabNavigator();


export default function App() {
 return (
  <ThemeProvider>
   <NavigationContainer initialRouteName='Home'>
   
     <Tab.Navigator>
      <Tab.Screen name = "Home" component={Home} options={{
        tabBarLabel:'Home', tabBarIcon: ({color,size})  => (<MaterialCommunityIcons name = 'home' color={'black'} size = {27}/>
         ) 
        }}/>
      <Tab.Screen  name = "Card" component={Card} options={{
        tabBarLabel:'Card', tabBarIcon: ({color,size})  => (<MaterialCommunityIcons name = 'credit-card' color={'black'} size = {27}/>
         ) ,
        }}/>
      <Tab.Screen  name = "Statistics" component={Statistics} options={{
        tabBarLabel:'Statistics', tabBarIcon: ({color,size})  => (<MaterialCommunityIcons name = 'chart-bar' color={'black'} size = {27}/>
         ) ,
        }}/>
      <Tab.Screen name = "Settings" component={Settings} options={{
        tabBarLabel:'Settings', tabBarIcon: ({color,size})  => (<MaterialCommunityIcons name = 'cog' color={'black'} size = {27}/>
         ) ,
        }}/>
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

 
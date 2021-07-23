import React from 'react'
import { Text,Dimensions,TouchableOpacity } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AntDesign,Ionicons  } from '@expo/vector-icons'; 
import Analitycs from '../../screens/ProtectedScreens/Analitycs';
import Dashboard from '../../screens/ProtectedScreens/Dashboard';
import AnalitycsLogo from '../../components/svg/AnalitycsLogo';
import AddWallet from '../../screens/ProtectedScreens/AddWallet';
import Wallets from '../../screens/ProtectedScreens/Wallets';
import MyProfile from '../../screens/ProtectedScreens/MyProfile';
import {useFonts,Nunito_900Black,Nunito_400Regular,Nunito_600SemiBold} from '@expo-google-fonts/nunito'
import * as color from '../../constants/colors'
import WalletsNavigator from './WalletsNavigator';





const {width} = Dimensions.get('window')
 
const HomeStackBottom = createBottomTabNavigator()

const HomeNavigation = () =>{
    
    let [fontsLoaded] = useFonts({
        Nunito_900Black,
        Nunito_400Regular,
        Nunito_600SemiBold
    })
    if (!fontsLoaded) {
        return <Text>Loading...</Text>
      }
    return(
        	<HomeStackBottom.Navigator 
            initialRouteName='Dashboard'
          
            tabBarOptions={{  
                activeTintColor:`${color.SECONDARY_COLOR}`,  
                inactiveTintColor:'#94AFB6',
                tabStyle:{
                    backgroundColor:'#fff',
                    paddingBottom:5
                },
                labelStyle:{
                    fontSize:11,
                    fontFamily:'Nunito_600SemiBold',
                },
                style:{
                    paddingBottom:5,
                    height:70,
                    borderTopLeftRadius:17, 
                    borderTopRightRadius:17,
                    position:'absolute',
                    bottom: 0,
                    padding:10,
                    width: width,
                    zIndex: 8 ,
                    backgroundColor:'#fff',
                }
                
            }}
         
            >
                <HomeStackBottom.Screen
                name='Dashboard'
                component={Dashboard}
                
                options={{
                    tabBarLabel:'Dashboard',
                    
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={30} color={color} />
                      ),

                }}
                />

                <HomeStackBottom.Screen
                name='Analitycs'
                component={Analitycs}
                options={{
                    tabBarLabel:'Analitycs',
                    tabBarIcon: ({ color, size }) => (
                        <AnalitycsLogo name="home" size={30} color={color} />
                      ),
                    
                }}
                />

                <HomeStackBottom.Screen
                name='AddWallet'
                component={AddWallet}
                
                options={{
                    tabBarLabel:'Add Wallet',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-sharp" size={30} color={color}/>
                      ),
                }}
        
                />

                <HomeStackBottom.Screen
                name='Wallets'
                component={WalletsNavigator}
                options={{
                    tabBarLabel:'Wallets',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="wallet-outline" size={30} color={color}/>

                      ),
                }}
                />

                <HomeStackBottom.Screen
                name='MyProfile'
                component={MyProfile}
                options={{
                    tabBarLabel:'My Profile',
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-outline" size={30} color={color} />

                      ),
                }}
                />

            </HomeStackBottom.Navigator>
    )
}


export default HomeNavigation 
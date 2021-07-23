import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Wallets from '../../screens/ProtectedScreens/Wallets';
import ViewWallet from '../../screens/ProtectedScreens/ViewWallet';
import EditWallet from '../../screens/ProtectedScreens/EditWallet';
import { Text, TouchableOpacity } from 'react-native'
 

const WalletStack = createStackNavigator()



const WalletsNavigator = ({navigation}) =>{
    return(
        <WalletStack.Navigator
        initialRouteName='Wallets'
        screenOptions={{
            headerShown:false,  
        }}
        >
            <WalletStack.Screen
            name='Wallets'
            component={Wallets} 
            />

            
            <WalletStack.Screen
            name='ViewWallet'
            component={ViewWallet}
            options={{
                headerShown:true,
                headerStyle:{
                    height:90,
                    backgroundColor:'#F1F3F6',
                    elevation:0
                    
                },
                title:'Visa',
                
                headerTitleStyle:{
                   paddingBottom:10,
                   fontSize:20,
                   color:'#3D6670'
                    
                },
                headerTitleAlign:'center',
            
                headerLeftContainerStyle:{
                    paddingBottom:10
                },
               headerRight:()=> <TouchableOpacity onPress={()=> navigation.navigate('EditWallet')}>
                                    <Text style={{fontSize:16,color:'#404CB3'}}>Edit</Text>
                                </TouchableOpacity>,
               headerRightContainerStyle:{
                     paddingBottom:10,
                     marginRight:20
               },
            }}
            
            />

            <WalletStack.Screen
            name='EditWallet'
            component={EditWallet}
            />
        </WalletStack.Navigator>
    )
}


export default WalletsNavigator
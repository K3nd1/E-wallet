import React,{useState} from 'react'
import { View, Text,StyleSheet,Button, TouchableOpacity } from 'react-native'
import { Ionicons,FontAwesome  } from '@expo/vector-icons'; 
import {useFonts,Nunito_900Black,Nunito_400Regular,Nunito_600SemiBold} from '@expo-google-fonts/nunito'


const Wallets = ({navigation}) => {
 
    let [fontsLoaded] = useFonts({
        Nunito_900Black,
        Nunito_400Regular,
        Nunito_600SemiBold
    })

    const [wallets, setWallets] = useState([
        {name:'**** **** **** 4826 Mastercard',price:'$487.12'},
        {name:'**** **** **** 1147 Visa',price:'$12 487.12'},
        {name:'********4BGhYv2bFBaiKhHjqDEL',price:'BTC 16,0012'},
        {name:'**** **** ****  PayPal',price:'$3440.20'},
    ])

    
    if (!fontsLoaded) {
        return <Text>Loading...</Text>
      }
 
    return(
        <View style={styles.container}>

            <View style={styles.first}>
                <Text style={styles.headerText}>My Wallets</Text>
                <Ionicons style={{marginLeft:50}} name="add-circle-outline" size={24} color="#A8ADDD" />
            </View>

            <View style={styles.second}>
                {wallets.map(item=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('ViewWallet')} style={styles.butonContainer} key={item.price}>
                            <FontAwesome name="bitcoin" size={55} color="orange" />
                            <View style={styles.butonSub}>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.priceText}>{item.price}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
                 <TouchableOpacity onPress={()=> navigation.navigate('AddWallet')} style={styles.addContainer}>
                            <Ionicons name="wallet-outline" size={55} color="#A8ADDD" />
                            <Text style={styles.addText}>Add new wallet</Text>
                </TouchableOpacity>
            </View>

     
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#243972',
 
    },
    first:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-around',
  
    },
    headerText:{
        fontSize:20,
        color:'#fff',
        fontFamily:'Nunito_600SemiBold',
        marginLeft:120
     },
    second:{
        flex:8,
        flexDirection:'column',
        alignItems:'center',
        paddingTop:50
    },

    butonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:350,
        backgroundColor:'#fff',
        borderRadius:12,
        marginVertical:8,
        paddingVertical:20,
        paddingHorizontal:20
    },
    butonSub:{      
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        marginLeft:50
    },
    nameText:{
        fontSize:13,
        color:'#3D6670',
        fontFamily:'Nunito_600SemiBold',
        
    },
    priceText:{
        fontSize:17,
        color:'#3D6670',
        fontFamily:'Nunito_600SemiBold',
        
    },
    addContainer:{
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:350,
        backgroundColor:'#404CB3',
        borderRadius:12,
        marginVertical:5,
        paddingVertical:20,
        paddingHorizontal:20
    },
    addText:{
        fontFamily:'Nunito_600SemiBold',
        fontSize:16,
        color:'#FFFFFF',
        marginLeft:50
    }


})

export default Wallets
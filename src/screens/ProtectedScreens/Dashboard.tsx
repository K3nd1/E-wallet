import React,{useState} from 'react'
import { View, Text, StyleSheet,ScrollView, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Ionicons,AntDesign,MaterialIcons,FontAwesome    } from '@expo/vector-icons'; 
import {useFonts,Nunito_900Black,Nunito_400Regular,Nunito_600SemiBold} from '@expo-google-fonts/nunito'
import ContentWrapper from '../../components/ContentWrapper';
import Down from '../../components/svg/Down';
import Up from '../../components/svg/Up';
import Chart from '../../components/svg/Chart';
import { datas,WalletsData } from '../../redux/data';

import {
    Select,
    CheckIcon,
    NativeBaseProvider,
  } from "native-base"




const Dashboard = ({navigation}) => {


    const [arrayOfData, setData] = useState(datas)
    const [arrayOfWallets, setArrayOfWallets] = useState(WalletsData)
    const [thisWeek, setThisWeek] = useState([
        {label:'This Week',value:'This week'},
        {label:'This month',value:'This month'},
        {label:'Last week',value:'Last week'},
        {label:'Last month',value:'Last month'},
        {label:'Half-year',value:'Half-year'},
        {label:'Year',value:'Year'},])
    let [language, setLanguage] = React.useState("")
    const [AllWallets, setAllWallets] = useState([
        {label:'All Wallets',value:'All Wallets'},
        {label:'Bitcoin',value:'Bitcoin'},
        {label:'Visa',value:'Visa'},
        {label:'Paypal',value:'Paypal'},
        {label:'Mastercard',value:'Mastercard'}])

    const [wall, setWall] = useState("")
 
    let [fontsLoaded] = useFonts({
        Nunito_900Black,
        Nunito_400Regular,
        Nunito_600SemiBold
    })


    if (!fontsLoaded) {
        return <Text>Loading...</Text>
      }
 
 
    return(
        <View style={styles.container}>
        
             <StatusBar style="light"  />



            <View style={styles.firstSubContainer}>
                <View style={styles.wallets} >
                    <Ionicons name="person-circle-outline" size={24} color="#A8ADDD" />
                    {/* <TouchableOpacity style={styles.selectWallets}> 
                        <Text style={styles.allWalletsText}>All Wallets</Text>
                        <AntDesign name="down" size={13} color="white" />
                    </TouchableOpacity> */}
                    <NativeBaseProvider>
                    <Select
                                    selectedValue={wall}
                                    borderWidth={0}
                                    width={150}
                                    alignSelf='center'
                                    dropdownIcon={<AntDesign name="down" size={13} color="white" />}
                                    borderRadius={13}
                                    
                                    style={{marginLeft:10}}
                                    placeholderTextColor='white'
                                    accessibilityLabel="All Wallets"
                                    placeholder="All Wallets"
                                    onValueChange={(itemValue) => setWall(itemValue)}
                                    _selectedItem={{
                                    bg: "cyan.600",
                                    color:'#404CB3',
                                    endIcon: <CheckIcon size={4}  />,
                                    }}
                                >
                                    {AllWallets.map(i=>{
                                        return <Select.Item  key={i.label} label={i.label} value={i.value}/>
                                    })}
                               
                                </Select>
                              
                        
                    </NativeBaseProvider>
                    <AntDesign name="calendar" size={24} color="#A8ADDD" />
                </View>

            </View>

             <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.balance}>
                    <Text style={styles.totalBalanceText}>TOTAL BALANCE</Text>
                    <Text style={styles.priceText}>$24 358.50</Text>
                </View>


            <ContentWrapper topMargin>
                <View style={styles.secondSubContainer}>
                    <View style={styles.weekContainer}>
                        <NativeBaseProvider>
                            
                                <Select
                                    _item={{color:'#fff'}}
                                    selectedValue={language}
                                    borderWidth={0}
                                    height={50}
                                    backgroundColor='#F1F3F6'
                                    borderRadius={13}
                                    style={{borderWidth:0,marginLeft:10}}
                                    placeholderTextColor='#404CB3'
                                    maxWidth={150}
                                    accessibilityLabel="This week"
                                    placeholder="This week"
                                    onValueChange={(itemValue) => setLanguage(itemValue)}
                                    _selectedItem={{
                                    bg: "cyan.600",
                                   
                                    endIcon: <CheckIcon size={4} />,
                                    }}
                                >
                                    {thisWeek.map(i=>{
                                        return <Select.Item key={i.label} label={i.label} value={i.value}/>
                                    })}
                               
                                </Select>
                        
                        </NativeBaseProvider>
                        <Text style={styles.monthText}>07 Jule - 14 Jule</Text>
                    </View>

                    <View style={styles.IncSpendContainer}>
                        <View style={styles.income}>
                            <Down/>
                            <View style={styles.leftMarginHelper}>
                                <Text style={styles.incoSpendText}>Income</Text>
                                <Text style={styles.incoSpendPriceText}>$487.12</Text>
                            </View>
                        </View>

                        <View style={styles.spending}>
                            <Up/>
                            <View style={styles.leftMarginHelper}>
                                <Text style={styles.incoSpendText}>Spending </Text>
                                <Text style={styles.incoSpendPriceText}>$695.05</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.chartContainer}>
                        <Chart/>
                    </View>
                </View>
            </ContentWrapper>
        

         
            <ContentWrapper>
            <View style={styles.thirdSubContainer}>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.upperButtons}>
                        <Text style={styles.buttonsText}>All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.upperButtons}>
                        <Text style={styles.buttonsText}>Income</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.upperButtons}>
                        <Text style={styles.buttonsText}>Spending </Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomWidth:1,borderBottomColor:'#DDDDDD',paddingBottom:20}}>
                    <View style={styles.top14Day}>
                        <Text style={styles.top14DayText}>14 Jule</Text>
                        <Text style={styles.top14PriceText}>+ $125,17</Text>
                    </View>
                  {arrayOfData.day14.map(items=>{
                      return(
                          <View style={styles.day14Array} key={items.id}>
                              <View style={styles.leftSide}>
                              <MaterialIcons style={styles.groceryIcon} name="local-grocery-store" size={24} color="#94AFB6" />
                                  <View>
                                      <Text style={styles.itemWallet}>{items.wallet}</Text>
                                      <Text style={styles.itemDes}>{items.des}</Text>
                                  </View>
                              </View>

                              <View style={styles.rightSide}>
                                  <Text style={styles.itemTime}>{items.time}</Text>
                                  <Text style={styles.itemPrice}>{items.price}</Text>
                              </View>
                          </View>
                      )
                  })}
                </View>

                <View style={{paddingVertical:25}}>
                    <View style={styles.top14Day}>
                        <Text style={styles.top14DayText}>13 Jule</Text>
                        <Text style={styles.top14PriceText}>+ $125,17</Text>
                    </View>
                  {arrayOfData.day13.map(items=>{
                      return(
                          <View style={styles.day14Array} key={items.id}>
                              <View style={styles.leftSide}>
                              <MaterialIcons style={styles.groceryIcon} name="local-grocery-store" size={24} color="#94AFB6" />
                                  <View>
                                      <Text style={styles.itemWallet}>{items.wallet}</Text>
                                      <Text style={styles.itemDes}>{items.des}</Text>
                                  </View>
                              </View>

                              <View style={styles.rightSide}>
                                  <Text style={styles.itemTime}>{items.time}</Text>
                                  <Text style={styles.itemPrice}>{items.price}</Text>
                              </View>
                          </View>
                      )
                  })}
                </View>

                <TouchableOpacity style={styles.showHistory}>
                    <Text style={styles.historyText}>SHOW ALL HISTORY</Text>
                </TouchableOpacity>

            </View>
            </ContentWrapper>
        
            <View style={styles.fourthSubContainer}>
            
               <ScrollView style={{paddingVertical:35}} horizontal showsHorizontalScrollIndicator={false}>
               <TouchableOpacity onPress={()=>navigation.navigate('AddWallet')} style={styles.showWalletAdd}>
                            <Ionicons name="wallet-outline" size={54} color="white" />
                            <Text style={styles.textWalletsAdd}>Add Wallet</Text>
                        </TouchableOpacity>
                    {arrayOfWallets.map(item=>{
                        return(   
                        <TouchableOpacity key={item.id} style={styles.showWallet}>
                            <FontAwesome name="bitcoin" size={54} color="orange" />
                            <Text style={styles.textWallets}>{item.name}</Text>
                        </TouchableOpacity>
                        )
                    })}
                </ScrollView>

            </View>

            </ScrollView>
            </View>
          

       
    )
} 

const styles = StyleSheet.create({


        /*FOURTH CONTAINER */
    fourthSubContainer:{
            height:290,
            flexDirection:'row',
            marginTop:-30
        },
        showWallet:{
            marginLeft:20,
            marginRight:10,
            height:150,
            width:120,
            backgroundColor:'white',
            borderRadius:12,
            
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-around'
        },
        textWallets:{
            fontSize:13,
            color:'#3D6670',
            fontFamily:'Nunito_600SemiBold'
        },
        showWalletAdd:{
            marginLeft:20,
            marginRight:10,
            height:150,
            width:120,
            backgroundColor:'#404CB3',
            borderRadius:12,
            
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-around'
        },
        textWalletsAdd:{
            fontSize:13,
            color:'#fff',
            fontFamily:'Nunito_600SemiBold'
        },
        /*THIRD CONTAINER */
    thirdSubContainer:{
            height:925,
            flexDirection:'column',
            paddingVertical:25,
            paddingHorizontal:15
        },

    buttonsContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },

    upperButtons:{
        paddingHorizontal:25,
        paddingVertical:8,
        borderRadius:25,
        backgroundColor:'#F1F3F6',
        marginLeft:10
    },
    buttonsText:{
        fontSize:14,
        color:'#404CB3',
        fontFamily:'Nunito_600SemiBold'
    },
    day14Array:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:13,
    
    },
    leftSide:{
        flexDirection:'row',
        alignItems:'center'
    },
    rightSide:{
        flexDirection:'column',
        justifyContent:'center'
    },
    groceryIcon:{
        padding:10,
        backgroundColor:'#F1F3F6',
        borderRadius:50,
        marginRight:10
    },
    itemWallet:{
        fontSize:13,
        color:'#94AFB6',
        fontFamily:'Nunito_600SemiBold'
    },
    itemDes:{
        fontSize:15,
        color:'#3D6670',
        fontFamily:'Nunito_600SemiBold'
    },
    itemTime:{
        fontSize:11,
        color:'#94AFB6',
        fontFamily:'Nunito_600SemiBold'
    },
    itemPrice:{
        fontSize:16,
        color:'#41BE06',
        fontFamily:'Nunito_600SemiBold'
    },
    top14Day:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
        paddingHorizontal:5
    },
    top14DayText:{
        fontSize:13,
        color:'#94AFB6',
        fontFamily:'Nunito_600SemiBold'
    },
    top14PriceText:{
        fontSize:11,
        color:'#FFFFFF',
        fontFamily:'Nunito_600SemiBold',
        backgroundColor:'#41BE06',
        borderRadius:30,
        padding:3
    },
    showHistory:{
      
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        borderTopWidth:1,
        borderTopColor:'#DDDDDD'
    },
    historyText:{
        fontSize:16,
        color:'#404CB3',
        fontFamily:'Nunito_900Black',
        paddingTop:20  
    },


    container:{
        flex:1
 },
    firstSubContainer:{ 
       height:130,
        backgroundColor:'#243972',
        flexDirection:'column',
        justifyContent:'center', 
       
    },
    wallets:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        marginTop:25
    },
    selectWallets:{
        flexDirection:'row',
        alignItems:'center'
    },
    allWalletsText:{
        fontSize:20,
        fontFamily:'Nunito_600SemiBold',
        color:'#fff',
        marginRight:10
    }, 
    balance:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
    
        height:150,
        backgroundColor:'#243972',
    },
    totalBalanceText:{
        color:'#A8ADDD',
        fontSize:14,
        fontFamily:"Nunito_600SemiBold"
    },
    priceText:{
        fontSize:32,
        fontFamily:"Nunito_600SemiBold",
        color:'#fff',
        paddingBottom:30
    },

    /*SECON CONTAINER */
    secondSubContainer:{
        height:450,
        flexDirection:'column',
        justifyContent:'space-between',
        paddingVertical:20
    },
    weekContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal:20
    },
    weekTextCon:{
        borderWidth:0,
        borderRadius:25,
        backgroundColor:'#F1F3F6',
        height:40,
        width:124

    },
    weekText:{
        fontSize:14,
        color:'#404CB3',
        marginRight:7,
        fontFamily:'Nunito_600SemiBold'
    },
    monthText:{
        fontSize:13,
        color:'#94AFB6',
        fontFamily:'Nunito_600SemiBold'
    },
    IncSpendContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    income:{
        flexDirection:'row',
        alignItems:'center'
    },
    spending:{
        flexDirection:'row',
        alignItems:'center'

    },
    incoSpendText:{
        fontSize:13,
        color:'#94AFB6',
        fontFamily:'Nunito_600SemiBold',
    },
    incoSpendPriceText:{
        fontSize:17,
        color:'#3D6670',
        fontFamily:'Nunito_600SemiBold'
    },
    leftMarginHelper:{
        marginLeft:10
    },
    chartContainer:{
        flexDirection:'row',
        justifyContent:'center',
        
    },
})

export default Dashboard   
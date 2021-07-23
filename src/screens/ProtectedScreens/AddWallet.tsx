import React,{useState} from 'react'
import { View, Text, StyleSheet,TextInput,TouchableOpacity, ScrollView,Pressable } from 'react-native'
import ContentWrapper from '../../components/ContentWrapper';
import CustomHeader from '../../components/CustomHeader';
import {StatusBar} from 'expo-status-bar'
import { Ionicons,AntDesign,MaterialIcons,FontAwesome,Feather} from '@expo/vector-icons'; 
import {Formik, useFormik} from 'formik' 
import * as Yup from 'yup'
import {
    Select, 
    CheckIcon,
    NativeBaseProvider, 
    Divider,
    Popover         
  } from "native-base"


  

 
const AddWallet = ({navigation}) => {

    const formik = useFormik({
        initialValues:{
            walletName:'',
            btcAddress:'',
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            walletName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            btcAddress: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8,'Password is too short - should be 8 chars minimum.').required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
    })
    
    const [AllWallets, setAllWallets] = useState([
        {label:'Bitcoin',value:'Bitcoin'},
        {label:'Etherium',value:'Etherium'},
        {label:'Dogecoin',value:'Dogecoin'},
        {label:'Mastercard',value:'Mastercard'}])

        const [wall, setWall] = useState("")


        const [tooltip, setTooltip] = useState(true)

    return( 
        <NativeBaseProvider> 
        <View style={styles.container}>
            <StatusBar style='dark'/>

            <View style={styles.first}>
                <CustomHeader 
                headerTitle='New Wallet' 
                leftTextName='Cancel'
                rightTextName='Save'
                rightFunc={()=> navigation.navigate('Wallets')}
                /> 
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.second}>
                <ContentWrapper>
                    <View style={{paddingHorizontal:20,paddingVertical:20}}>
                        <View>
                            <Text style={styles.labelText}>Wallet Name</Text>
                            <TextInput  
                               onChangeText={formik.handleChange('walletName')}
                               value={formik.values.walletName}
                               onBlur={formik.handleBlur('walletName')}
                               style={styles.emailInput} placeholder=''/>
                                         
                                {formik.touched.walletName && formik.errors.walletName ? (
                                        <Text style={{color:'red'}}>{formik.errors.walletName}</Text>
                                ) : null}
                          

                        </View>
 
                        <View style={{marginTop:30}}>
                            <Text style={styles.labelText}>Wallet Type</Text>
                        
                                    <Select
                                    selectedValue={wall}      
                                    // accessibilityLabel='Cryptocurrency'
                                    placeholder="Cryptocurrency"
                                    onValueChange={(itemValue) => setWall(itemValue)}
                                    _selectedItem={{
                                    bg: "cyan.600",
                                   endIcon: <CheckIcon size={4}  />,
                                    }}
                                    >
                                    {AllWallets.map(i=>{
                                        return <Select.Item  key={i.label} label={i.label} value={i.value}/>
                                    })}
                               
                                </Select>
                        </View>

                        <View style={{marginTop:30}}>
                            <Text style={styles.labelText}>Currency Type</Text>
                            <View style={styles.currencyType}>
                                    <TouchableOpacity style={{...styles.currContainer, backgroundColor:'#404CB3'}}><Text style={{...styles.currencyText,color:'#fff'}} >Bitcoin</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.currContainer}><Text style={styles.currencyText}>EOS</Text></TouchableOpacity>
                                    <TouchableOpacity style={{...styles.currContainer, borderRightWidth:0}}><Text style={styles.currencyText}>Tether</Text></TouchableOpacity>
                            </View>
                        </View>

                        <Divider style={{marginTop:30}}/>

                        <View style={{marginTop:30}}>
                            <Text style={styles.labelText}>Your Bitcoin Address</Text>
                            <TextInput  
                               onChangeText={formik.handleChange('btcAddress')}
                               value={formik.values.btcAddress}
                               onBlur={formik.handleBlur('btcAddress')}
                               style={styles.emailInput}/>
                             
                                
                                {formik.touched.btcAddress && formik.errors.btcAddress ? (
                                 <Text style={{color:'red'}}>{formik.errors.btcAddress}</Text>
                                ) : null}
                          
                        </View>

                        
                        <View  style={{marginTop:30}}>
                            <Text style={styles.labelText}>E-Mail</Text>
                            <TextInput
                            onChangeText={formik.handleChange('email')}
                            value={formik.values.email}
                            onBlur={formik.handleBlur('email')}
                            style={styles.emailInput}/>
                            
                         
                            {formik.touched.email && formik.errors.email ? (
                              <Text style={{color:'red'}}>{formik.errors.email}</Text>
                                ) : null}
                          

                        </View>
                 
                    
                        <View style={{marginTop:30}}>
                            <Text style={styles.labelText}>Password</Text>
                            <View style={styles.passwordInput}>
                                <TextInput 
                                onChangeText={formik.handleChange('password')}
                                onBlur={formik.handleBlur('password')}
                                value={formik.values.password}
                                style={{width:200,height:45}} secureTextEntry/>

                                <Feather  style={styles.passIcon} name="info" size={15} color='#404CB3' />
                                  
                            </View>
                            {formik.touched.password && formik.errors.password ? (
                              <Text style={{color:'red'}}>{formik.errors.password}</Text>
                                ) : null}
                          
                           
                        </View>

                        <TouchableOpacity style={styles.AddWallet}>
                            <Text style={styles.AddWalletText}>ADD WALLET</Text>
                        </TouchableOpacity>
                        
                    </View>
                </ContentWrapper>
            </View>
            </ScrollView>
            
        </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({

    currencyText:{
        fontSize:15,
        color:'#404CB3',
    },
    currContainer:{
        paddingVertical:10,
        backgroundColor:'#fff',
        paddingHorizontal:33.5,
        borderRightWidth:1,
        borderRightColor:'#404CB3'
   
    },
    currencyType:{
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderColor:'#404CB3'
    },
    emailInput:{
        borderWidth:1,
        paddingHorizontal:10,
        borderColor:'#94AFB6',
        borderRadius:4,
        
        height:45
    },
    passwordInput:{
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderColor:'#94AFB6',
        borderRadius:4
    },
    passIcon:{
        height:30,
        padding:7,
        backgroundColor:'#F1F3F6',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#DDDDDD'
    },
    labelText:{
        fontSize:12,
        color:'#94AFB6',
        marginBottom:10
    },
    container:{
        flex:1,
    },
    first:{
        	paddingBottom:10,
        height:100,
        justifyContent:'flex-end'
    },
    second:{
        height:850,
        marginTop:40,
    },
    AddWallet:{
      
        paddingVertical:16,
        borderRadius:4,
        backgroundColor:'#404CB3',
        marginTop:50
    },
    AddWalletText:{
        fontSize:16,
        color:'#fff',
        textAlign:'center'
    }
})

export default AddWallet
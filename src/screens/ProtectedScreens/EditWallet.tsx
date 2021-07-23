import React,{useState} from 'react'
import { 
    View,
    Text,
    StyleSheet, 
    ScrollView, 
    TextInput,
    TouchableOpacity 
    } from 'react-native'
import ContentWrapper from '../../components/ContentWrapper';
import CustomHeader from '../../components/CustomHeader';
import {
    Select, 
    CheckIcon,
    NativeBaseProvider, 
    Divider,
    Popover         
  } from "native-base"
import {Formik, useFormik} from 'formik' 
import * as Yup from 'yup'


const EditWallet = () =>{

        
    const [AllWallets, setAllWallets] = useState([
        {label:'Visa',value:'Visa'},
        {label:'Etherium',value:'Etherium'},
        {label:'Dogecoin',value:'Dogecoin'},
        {label:'Mastercard',value:'Mastercard'}])

        const [wall, setWall] = useState("")

        const formik = useFormik({
            initialValues:{
                walletName:'',
                cardNumber:''
            },
            validationSchema: Yup.object({
                walletName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                cardNumber: Yup.string().min(16, 'Card Number must be 15 chars').required('Required'),
            }),
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
              },
        })
        

    return(
        <NativeBaseProvider>
        <View style={styles.container}>
             <View style={styles.first}>
                <CustomHeader 
                headerTitle='Wallet Edit' 
                leftTextName='Cancel'
                rightTextName='Save'
                /> 
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.second}>
                    <ContentWrapper>
                        <View style={styles.subSecondContainer}>
                            <View>
                                <Text style={styles.labelText}>Wallet Name</Text>
                                <TextInput 
                                    style={styles.input} 
                                    onChangeText={formik.handleChange('walletName')}
                                    value={formik.values.walletName}
                                    onBlur={formik.handleBlur('walletName')}
                                    placeholder=''
                                /> 
                                            
                                    {formik.touched.walletName && formik.errors.walletName ? (
                                            <Text style={{color:'red'}}>{formik.errors.walletName}</Text>
                                    ) : null}
                            </View>

                            
                            <View style={styles.mrgTop}>
                                <Text style={styles.labelText}>Wallet Type</Text>
                            
                                <Select
                                        selectedValue={wall}      
                                        // accessibilityLabel='Cryptocurrency'
                                        placeholder="Bank Card"
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

                            <View style={styles.mrgTop}>
                                <Text style={styles.labelText}>Card Type</Text>
                                <View style={styles.cardType}>
                                    <TouchableOpacity style={styles.cardTypeTouchColo}>
                                        <Text style={styles.cardTypeTextColor}>Visa</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.cardTypeTouch}>
                                        <Text style={styles.cardTypeText}>Mastercard</Text>
                                    </TouchableOpacity>
                                </View>
                                        
                            </View>

                            <Divider style={styles.mrgTop}/>

                            <View>
                                <Text style={styles.labelText}>Card Number</Text>
                                <TextInput 
                                    style={styles.input} 
                                    onChangeText={formik.handleChange('cardNumber')}
                                    value={formik.values.cardNumber}
                                    onBlur={formik.handleBlur('cardNumber')}
                                    placeholder=''
                                /> 
                                            
                                    {formik.touched.cardNumber && formik.errors.cardNumber ? (
                                            <Text style={{color:'red'}}>{formik.errors.walletName}</Text>
                                    ) : null}
                            </View>

                        </View>
                    </ContentWrapper>
                </View>
            </ScrollView>
        </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
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
    labelText:{
        fontSize:12,
        color:'#94AFB6',
        marginBottom:10
    },
    input:{
        borderWidth:1,
        paddingHorizontal:10,
        borderColor:'#94AFB6',
        borderRadius:4,
        height:45
    },
    cardType:{
        borderWidth:1,
        flexDirection:'row',
        borderRadius:5,
        borderColor:'#404CB3'
    },
    cardTypeTouch:{
        flex:1,
    
        paddingVertical:8
    },
    cardTypeText:{
        textAlign:'center',
        fontSize:15,
        color:'#404CB3',
    },
    cardTypeTextColor:{
        textAlign:'center',
        fontSize:15,
        color:'#fff',
    },
    cardTypeTouchColo:{
        flex:1,
      
        paddingVertical:8,
        backgroundColor:'#404CB3'
    },
    mrgTop:{
        marginTop:30
    },
    subSecondContainer:{
        paddingHorizontal:20,
        paddingVertical:20
    }

})

export default EditWallet
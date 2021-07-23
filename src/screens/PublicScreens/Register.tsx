import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import AppLogo from '../../components/svg/AppLogo'
import * as  color from '../../constants/colors'
import MyButton from '../../components/LoginButton/MyButton';
import MyTextInput from '../../components/LoginButton/MyTextInput'
import { AntDesign,Ionicons,Feather ,FontAwesome   } from '@expo/vector-icons'; 
import {useFonts,Nunito_900Black,Nunito_400Regular,Nunito_600SemiBold} from '@expo-google-fonts/nunito'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {RegisterScreenNavigationProp} from '../../navigation/PublicScreen/LoginNavigation'


interface IRegisterProps{
    navigation: RegisterScreenNavigationProp
}

const Register:React.FC<IRegisterProps> = ({navigation}) =>{
    
    let [fontsLoaded] = useFonts({
        Nunito_900Black,
        Nunito_400Regular,
        Nunito_600SemiBold
    })

    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            phone:''
        },
        validationSchema: Yup.object({
            firstName:Yup.string().required('Required').max(10,'Cant use more than 10 characters'),
            lastName:Yup.string().required('Required').max(10,'Cant use more than 10 characters'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phone:Yup.string().required('Required').max(12,'Cant use more than 10 characters'),

        }),
        onSubmit: () =>{
            console.log('prova')
        }
    })


    
    if (!fontsLoaded) {
        return <Text>Loading...</Text>
      }

    return(
        <View  style={styles.container}>
                <View style={styles.logoContainer}>
                    <AppLogo/>
                </View>

                <Text style={styles.textSignIn}>SIGN UP</Text>

                <View style={styles.inputContainer}>
             
                    <MyTextInput
                        underline
                        icon={()=><Ionicons name="person-circle-outline" size={24} color='#94AFB6' />}
                        placeholder="First Name"
                        value={formik.values.firstName}
                        handleChangeText={formik.handleChange('firstName')}
                        handleBlurEvent={formik.handleBlur('firstName')}

                    />
                          {formik.touched.firstName && formik.errors.firstName ? (
                              <Text style={{color:'red'}}>{formik.errors.firstName}</Text>
                                ) : null}
                    <MyTextInput
                        underline
                        icon={()=><Ionicons name="person-circle-outline" size={24} color='#94AFB6' />}
                        placeholder="Last Name"
                        value={formik.values.lastName}
                        handleChangeText={formik.handleChange('lastName')}
                        handleBlurEvent={formik.handleBlur('lastName')}
                    />
                          {formik.touched.lastName && formik.errors.lastName ? (
                              <Text style={{color:'red'}}>{formik.errors.lastName}</Text>
                                ) : null}
                        <MyTextInput
                        underline
                        icon={()=><AntDesign name="mail"  size={24}  color='#94AFB6' />}
                        placeholder="E-mail"
                        value={formik.values.email}
                        handleChangeText={formik.handleChange('email')}
                        handleBlurEvent={formik.handleBlur('email')}
                    />
                          {formik.touched.email && formik.errors.email ? (
                              <Text style={{color:'red'}}>{formik.errors.email}</Text>
                                ) : null}

                        <MyTextInput
                        icon={()=><Feather name="phone" size={24} color='#94AFB6'  />}
                        placeholder="Phone"
                        value={formik.values.phone}
                        handleChangeText={formik.handleChange('phone')}
                        handleBlurEvent={formik.handleBlur('phone')}
                    />
                          {formik.touched.phone && formik.errors.phone ? (
                              <Text style={{color:'red'}}>{formik.errors.phone}</Text>
                                ) : null}
            </View>

            <Text style={styles.textUse}>or use an extraneous accounts</Text>

            <View style={styles.socialContainer}>

                <View style={{
                    ...styles.socialSubContainer,
                    paddingRight:60,
                    borderRightWidth:1,
                    borderRightColor:'#DDDDDD'
                }}>
                    <AntDesign name="google" size={18} color="#94AFB6" />
                    <TouchableOpacity>
                        <Text style={styles.socialText}>GOOGLE</Text>
                    </TouchableOpacity>
            
                </View>

                <View style={styles.socialSubContainer}>
                    <FontAwesome name="facebook" size={18} color="#94AFB6"  />
                        <TouchableOpacity>

                            <Text style={styles.socialText}>FACEBOOK</Text>

                        </TouchableOpacity>
                </View>
             
            </View>

            <View style={styles.butonContainer}> 

                <MyButton 
                    backgroundColor={color.PRIMARY_BG_COLOR} 
                    text='SIGN IN' textColor={color.SECONDARY_COLOR}
                    goToSignUp={()=> navigation.navigate('Login')}
                    />   

                <MyButton 
                    backgroundColor={color.SECONDARY_COLOR} 
                    text='SIGN UP' textColor='#fff'/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        backgroundColor: color.PRIMARY_BG_COLOR,
    },
    logoContainer:{ 
        flexDirection:'row',
        justifyContent:'center',
        marginTop:40
    },
    textSignIn:{
        fontSize:30,
        fontFamily:'Nunito_900Black',
        letterSpacing:2,
        color:'#3D6670',
        textAlign:'center',
        marginTop:10
    },
    inputContainer:{
        backgroundColor:'#fff',
        margin:15,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 10,
        borderRadius:5,
        marginTop:50
    },
    textUse:{
        fontFamily:'Nunito_400Regular',
        color:'#3D6670',
        fontSize:15,
        textAlign:'center',
        marginTop:5
    },
    socialContainer:{
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:15,
        borderColor:'#DDDDDD',
        marginTop:20
    },
    socialText:{
        fontSize:14,
        fontFamily:'Nunito_400Regular',
        color:color.SECONDARY_COLOR,
        paddingLeft:10
    },
    socialSubContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:13
    },
    butonContainer:{
        flexDirection:'row',
        marginTop:50,
        justifyContent:'space-around',
        alignItems:'center'
    }

})


export default Register 